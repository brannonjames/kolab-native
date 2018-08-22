import React, { Component } from 'react';
import { View } from 'react-native';
import { Camera, Permissions } from 'expo';

class KoCam extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Camera'
  });

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    return (
      <Camera style={{ flex: 1 }}>
      
      </Camera>
    )
  }
}

export default KoCam;