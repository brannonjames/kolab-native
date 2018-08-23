import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Camera, Permissions } from 'expo';


class SnapPhoto extends Component {

  state = {
    type: Camera.Constants.Type.back,
    hasCameraPermission: null
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  flipCamera = () => {
    this.setState({ 
      type: this.state.type === Camera.Constants.Type.back ?
            Camera.Constants.Type.front :
            Camera.Constants.Type.back
     });
  }

  snap = async () => {
    if (this.camera) {
      let picture = await this.camera.takePictureAsync({ base64: true });
      this.props.onSnap(picture);
    }
  }

  render() {
    const { exit } = this.props;
    return (
      <Camera 
          style={{ flex: 1 }} 
          type={this.state.type} 
          ref={ref => this.camera = ref}
          pictureSize="1920x1080"
        >
          <View style={styles.cameraStyle}>
  
          <View style={styles.topToolbarStyle}>
            <View />
  
            <TouchableOpacity style={styles.toolbarButtonStyle} onPress={exit}>
              <Text style={styles.toolbarButtonTextStyle}>Cancel</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.toolbarButtonStyle} onPress={this.flipCamera}>
              <Text style={styles.toolbarButtonTextStyle}>Flip</Text>
            </TouchableOpacity>
  
          </View>
  
          <View style={styles.bottomToolbarStyle}>
            <TouchableOpacity style={styles.cameraButtonStyle} onPress={this.snap}>
            </TouchableOpacity>
          </View>
          
          </View>
          
        </Camera>
    )
  }
}

const styles = {
  cameraStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  topToolbarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  toolbarButtonStyle: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 8,
    borderRadius: 10
  },
  toolbarButtonTextStyle: {
    color: 'white'
  },
  bottomToolbarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  cameraButtonStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  }
}

export default SnapPhoto;

