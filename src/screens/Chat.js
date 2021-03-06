import React from 'react';
import { KeyboardAvoidingView, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { openChatSocket, loadInitialMessages, sendMessage } from '../store/actions/chat';
import ChatInput from '../components/ChatInput';
import ChatList from '../components/ChatList';
import Main from '../components/Main';
import Loader from '../components/Loader';
import ErrorMsg from '../components/ErrorMsg';


class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('project') || 'Chat',
    headerRight: <Button title="Info" onPress={() => navigation.navigate('project_details')} />,
    headerLeft: <Button title="Projects" onPress={() => navigation.navigate('projects')} />
  });

  async componentDidMount(){
    const { currentProject, openChatSocket, navigation, loadInitialMessages } = this.props;
    try {
      navigation.setParams({ project: currentProject.title });
      await openChatSocket(currentProject.id);
      await loadInitialMessages();

    } catch (err) {

      navigation.navigate('projects');

    }
  } 

  componentWillUnmount() {
    const { socket } = this.props;
    socket.removeAllListeners();
  }

  handleSubmit = message => {
    if (message.length > 0) {
      this.props.sendMessage(message);
    }
  }

  render(){
    const { isLoading, error, messages } = this.props;
    if (isLoading) {
      return (
        <Main>
          <Loader size="large" />
        </Main>
      );
    }
    if (error) {
      return (
        <Main>
          <ErrorMsg error={error} />
        </Main>
      )
    }

    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}  style={{ flex: 1 }} >
        <Main style={{ paddingLeft: 0, paddingRight: 0 }}>

          <View style={{ flex: 1 }}>
          <ChatList 
            messages={messages}
            handleDelete={this.handleDelete}
            currentUserId={this.props.currentUserId}
          />
          </View>
          
          
          <ChatInput
            onSubmit={this.handleSubmit}
          />

        </Main>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({ chat, projects, user }) => ({
  currentProject: projects.current.project,
  messages: chat.messages,
  socket: chat.socket,
  isLoading: chat.isLoading,
  error: chat.error,
  currentUserId: user.id
});

export default connect(mapStateToProps, {
  openChatSocket,
  loadInitialMessages,
  sendMessage
})(Chat);