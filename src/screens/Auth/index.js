import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Main from '../../components/Main';
import AuthForm from '../../components/AuthForm';
import AuthButtonView from '../../components/AuthButtonView';
import ErrorMsg from '../../components/ErrorMsg';

import styles from './style';

class AuthScreen extends Component {

  state = {
    authType: 'Sign Up',
    form: {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  toggleAuth = () => {
    const { authType } = this.state;

    this.props.clearAuthError();

    this.setState({
      authType: authType === 'Sign Up' ? 'Login' : 'Sign Up'
    });
  }

  handleChange = name => text => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: text
      }
    });
  }

  handleSubmit = async () => {
    try {

      const { authType, form } = this.state;
      const { loginUser, signupUser, navigation } = this.props;
  
      if (authType === 'Login') {
        await loginUser(form);
        navigation.navigate('app');
      }
  
      if (authType === 'Sign Up') {
        await signupUser(form);
        this.toggleAuth();
      }

    } catch (err) {

    }
  }


  render() {
    const { authHeaderStyle } = styles;
    const { authType } = this.state;
    const { isLoading, error } = this.props;

    return (
      <Main>

        <Text style={authHeaderStyle}>
          {authType}
        </Text>

        <ErrorMsg error={error} />

        <AuthForm 
          authType={authType} 
          onChange={this.handleChange}
          formValues={this.state.form}
        />

        <AuthButtonView 
          authType={this.state.authType} 
          onSubmit={this.handleSubmit}
          toggleAuth={this.toggleAuth}
          isLoading={isLoading}
        />

      </Main>
    );
  }
}

const mapDispatchToProps = ({ user, auth }) => ({
  user,
  isLoading: auth.isLoading,
  error: auth.error
})

export default connect(mapDispatchToProps, actions)(AuthScreen);