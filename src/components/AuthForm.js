import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Input from './Input';

export default ({ authType, onChange, formValues }) => {
  const { username, email, password, confirm } = formValues;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      { authType === 'Sign Up' &&
        <Input 
          placeholder="username"
          onChangeText={onChange('username')}
          contentType="username"
          value={username}
        />
      }

      <Input 
        placeholder="email"
        onChangeText={onChange('email')}
        contentType="emailAddress"
        value={email}
      />
      <Input 
        password
        placeholder="password"
        onChangeText={onChange('password')}
        contentType="password"
        value={password}
      />

      { authType === 'Sign Up' &&
        <Input 
          password
          placeholder="confirm"
          onChangeText={onChange('confirm')}
          contentType="password"
          value={confirm}
        />
      }

    </KeyboardAvoidingView>
  );
}

const styles = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 36
  }
}