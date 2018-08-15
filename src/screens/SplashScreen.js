import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/user';
import jwtDecode from 'jwt-decode';
import { SecureStore } from 'expo';
import { setTokenHeader } from '../services/apiCall';
import Loader from '../components/Loader';

// This component is basically here just so I can show something 
// while the app is deciding if the user is authenticated or not

class SplashScreen extends Component {
  async componentDidMount() {
    const { navigation, getCurrentUser } = this.props;

<<<<<<< HEAD
    // let token = await SecureStore.getItemAsync('token');
=======
    // gets the item from a secure storage locker on the device
    // expo handles all the security stuff behind the scenes
    let token = await SecureStore.getItemAsync('token');
>>>>>>> master

    // this is for development only so I can test the auth routes
    let token = await SecureStore.deleteItemAsync('token');

    if (token) {
      // if a token is in device storage, hurray! You're authenticated,
      // take the user to the main app..
      setTokenHeader(token);
      const userId = jwtDecode(token).sub;
      await getCurrentUser(userId);
      navigation.navigate('app');

    } else {
      // ..otherwise bring to the login page
      navigation.navigate('auth');
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Loader size="large" />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default connect(null, { getCurrentUser })(SplashScreen);