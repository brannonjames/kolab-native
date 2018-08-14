import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getCurrentUser } from '../store/actions/user';
import jwtDecode from 'jwt-decode';
import { SecureStore } from 'expo';
import { setTokenHeader } from '../services/apiCall';
import Loader from '../components/Loader';

class SplashScreen extends Component {
  async componentDidMount() {
    const { navigation, getCurrentUser } = this.props;

    // let token = await SecureStore.getItemAsync('token');

    // this is for development only so I can test the auth routes
    let token = await SecureStore.deleteItemAsync('token');

    if (token) {

      setTokenHeader(token);
      const userId = jwtDecode(token).sub;
      await getCurrentUser(userId);
      navigation.navigate('app');

    } else {
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