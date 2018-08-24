import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { ImageManipulator } from 'expo';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { saveAvatar } from '../store/actions/camera';

import SnapPhoto from '../components/SnapPhoto';
import PreviewPhoto from '../components/PreviewPhoto';

class KoCam extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Camera',
    header: null
  });


  state = {
    picture: null,
    name: Date.now()
  }

  componentDidMount() {
    StatusBar.setHidden(true);    
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }


  exit = () => {
    this.setState({ picture: null });
    this.props.navigation.navigate('account');
  }

  handleSnap = picture => {
    this.setState({ picture });
  }

  handleSave = async () => {
    try {
      const { saveAvatar, navigation } = this.props;
      await saveAvatar(this.state.picture.uri);
      this.setState({ picture: null });
      navigation.navigate('account');

    } catch (err) {
      Alert.alert(
        'Uh Oh',
        'Something went wrong adding your photo',
        [
          { text: 'OK', onPress: () => {
            this.setState({ picture: null });
            navigation.navigate('account');
          }}
        ]
      )
    }
  }

  render() {
    if (!this.state.picture) {
      return (
        <SnapPhoto 
          exit={this.exit}
          onSnap={this.handleSnap} 
        />
      )
    }
    return (
      <PreviewPhoto 
        picture={this.state.picture}
        exit={this.exit}
        onSave={this.handleSave}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const mapStateToProps = ({ camera }) => ({
  isLoading: camera.isLoading,
  error: camera.error
});


export default connect(mapStateToProps, { saveAvatar })(KoCam);