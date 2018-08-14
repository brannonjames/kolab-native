import React, { Component } from 'react';
import { Text, LayoutAnimation } from 'react-native';
import Main from '../../components/Main';
import Button from '../../components/Button';
import AuthForm from '../../components/AuthForm';
import AuthButtonView from '../../components/AuthButtonView';

import styles from './style';

export default class AuthScreen extends Component {

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


  render() {
    const { authHeaderStyle } = styles;
    const { authType } = this.state;
    return (
      <Main>

        <Text style={authHeaderStyle}>
          {authType}
        </Text>

        <AuthForm 
          authType={authType} 
          onChange={this.handleChange}
          formValues={this.state.form}
        />

        <AuthButtonView 
          authType={this.state.authType} 
          onSubmit={() => {}}
          toggleAuth={this.toggleAuth}
        />

      </Main>
    );
  }
}