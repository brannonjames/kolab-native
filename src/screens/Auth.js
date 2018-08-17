import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Main from '../components/Main';
import AuthForm from '../components/AuthForm';
import AuthButtonView from '../components/AuthButtonView';
import ErrorMsg from '../components/ErrorMsg';


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

  // this is what's responsible for toggling between
  // login and sign up views
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
      // any errors will be handles within redux
      // so I don't need anything here
      return false;
    }
  }


  render() {
    const { authHeaderStyle } = styles;
    const { authType } = this.state;
    const { isLoading, error } = this.props;

    return (
      <Main style={{ alignItems: 'center' }}>

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

const styles = {
  authHeaderStyle: {
    fontSize: 40,
    marginTop: 52,
    fontWeight: 'bold'
  }
};

const mapDispatchToProps = ({ user, auth }) => ({
  user,
  isLoading: auth.isLoading,
  error: auth.error
})

export default connect(mapDispatchToProps, actions)(AuthScreen);