import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Camera, Permissions } from 'expo';
import firebase from 'firebase';

import SnapPhoto from '../components/SnapPhoto';
import PreviewPhoto from '../components/PreviewPhoto';

class KoCam extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Camera',
    header: null
  });


  state = {
    picture: null,
    imageRef: null,
    name: Date.now()
  }

  componentDidMount() {
    StatusBar.setHidden(true);
    const storage = firebase.storage();
    this.storageRef = storage.ref();
    
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
    console.log(this.state.picture.base64)
    let response = await fetch(this.state.picture.uri);
    let blog = await response.blob();

    const imageRef = this.storageRef.child(`avatars/${this.state.name}.jpg`);
    let snapshot = await imageRef.put(blog);

    const url = await imageRef.getDownloadURL();
    console.log(url);
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
      />
    )
  }
}


export default KoCam;