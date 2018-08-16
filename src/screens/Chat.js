import React from 'react';
import { View, LayoutAnimation, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { openChatSocket, loadInitialMessages } from '../store/actions/chat';
import ChatInput from '../components/ChatInput';
import ChatList from '../components/ChatList';


class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Chat'
  });

  state = {
    currentMessage: '',
    messages: [],
    socket: null
  }

  async componentDidMount(){
    const { currentProject, openChatSocket, navigation, loadInitialMessages } = this.props;

    try {

      await openChatSocket(currentProject.id);
      await loadInitialMessages();

    } catch (err) {
      console.log(err)
      navigation.navigate('projects');

    }

    // let token = await SecureStore.getItemAsync('token');


    // this.setState({
    //   socket: io('http://localhost:3060', {
    //     extraHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    // });

    // const { socket } = this.state;

    // socket.emit('subscribe', this.props.room);

    // socket.on('new_message', message => {
    //   LayoutAnimation.spring();
    //   this.setState({ messages: [...this.state.messages, message] });
    // });

    // socket.on('load_initial_messages', messages => {
    //   this.setState({ messages });
    // });

  } 

  componentWillUnmount() {
    const { socket } = this.state;
    socket.removeAllListeners();
  }

  handleSubmit = message => {
    // console.log(this.state.socket)
    const newMessage = {
      message,
      room: this.props.room
    }
    this.state.socket.emit('send_message', newMessage);
  }

  handleDelete = message => {
    this.state.socket.emit('delete_message', message);
  }


  render(){
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={64}  style={{ flex: 1 }} >
        <View style={{ flex: 1 }}>

          <ChatList 
            messages={this.state.messages}
            handleDelete={this.handleDelete}
          />
          
          
          <ChatInput 
            handleSubmit={this.handleSubmit}
          />

        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = ({ chat, projects }) => ({
  currentProject: projects.current,
  messages: chat.messages
});

export default connect(mapStateToProps, { openChatSocket, loadInitialMessages })(Chat);