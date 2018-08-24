import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Loader from './Loader';


class PreviewPhoto extends Component {

  render() {
    const { exit, onSave, picture, isLoading } = this.props;
    return (
        <View style={styles.previewContainerStyle}>

          <Image source={{ uri: picture.uri }} style={styles.imageStyle} />
  
          <View style={styles.previewStyle}>

            <View style={styles.topToolbarStyle}>
              <TouchableOpacity style={styles.toolbarButtonStyle} onPress={exit}>
                <Text style={styles.toolbarButtonTextStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
    
            <View style={styles.bottomToolbarStyle}>
              <TouchableOpacity style={styles.saveButtonStyle} onPress={onSave}>
                { isLoading ? <Loader /> : <Text>Save</Text> }
              </TouchableOpacity>
            </View>

          </View>
          
        </View>
    )
  }
}

const styles = {
  previewContainerStyle: {
    flex: 1
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  previewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
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
  saveButtonStyle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
  }
}

export default PreviewPhoto;

