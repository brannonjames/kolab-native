import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import Main from '../../components/Main';
import AuthForm from '../../components/AuthForm';
import AuthButtonView from '../../components/AuthButtonView';

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
    await this.props.loginUser(this.state.form);
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
          onSubmit={this.handleSubmit}
          toggleAuth={this.toggleAuth}
        />

      </Main>
    );
  }
}

const mapDispatchToProps = state => ({
  state
})

export default connect(mapDispatchToProps, actions)(AuthScreen);