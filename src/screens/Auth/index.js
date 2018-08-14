import React, { Component } from 'react';
import { Text, LayoutAnimation } from 'react-native';
import Main from '../../components/Main';
import Button from '../../components/Button';
import AuthForm from '../../components/AuthForm';
import AuthButtonView from '../../components/AuthButtonView';
import Input from '../../components/Input';

import styles from './style';

export default class AuthScreen extends Component {

  state = {
    authType: 'Sign Up'
  }

  toggleAuth = () => {
    const { authType } = this.state;
    this.setState({
      authType: authType === 'Sign Up' ? 'Login' : 'Sign Up'
    });
  }

  renderAuthForm() {
    const { authType } = this.state;
    return (
      <AuthForm>
        { authType === 'Sign Up' &&
          <Input 
            placeholder="username"
          />
        }

        <Input 
          placeholder="email"
        />
        <Input 
          placeholder="password"
        />

        { authType === 'Sign Up' &&
          <Input 
            placeholder="confirm"
          />
        }
    </AuthForm>
    )
  }

  render() {
    const { authHeaderStyle } = styles;
    const { authType } = this.state;
    return (
      <Main>

        <Text style={authHeaderStyle}>
          {authType}
        </Text>

      { this.renderAuthForm() }

        <AuthButtonView 
          authType={this.state.authType} 
          onSubmit={() => {}}
          toggleAuth={this.toggleAuth}
        />

      </Main>
    );
  }
}