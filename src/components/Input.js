import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

class Input extends Component {

  state = { limitReached: false }

  componentWillReceiveProps = nextProps => {
    const { limit, value, onChangeText } = nextProps;
    if (limit && value.length > limit ) {
      this.setState({ limitReached: true });
    } else if (limit && value.length <= limit ) {
      this.setState({ limitReached: false });
    } 
  }

  renderCounter() {
    const { value, limit } = this.props;
    if (limit) {
      return (
        <Text 
          style={[
              styles.limitStyle, 
              this.state.limitReached ? styles.limitReached : null
            ]}
        >
          {`${value.length}/${limit}`}
        </Text> 
      )
    }
    return null;
  }

  render() {
    const {
      returnKeyType,
      contentType,
      inputStyle,
      containerStyle,
      onChangeText,
      value,
      placeholder,
      password,
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          secureTextEntry={password} 
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          textContentType={contentType}
          autoCapitalize="none"
          returnKeyType={returnKeyType || "done"}
          keyboardShouldPersistTaps="never"
        />

        { this.renderCounter() }

      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.8)',
    borderBottomWidth: 1,
    padding: 4,
    margin: 20 
  },
  input: {
    flex: 1,
    fontSize: 20
  },
  limitStyle: {
    alignSelf: 'flex-end',
    fontSize: 11,
    paddingLeft: 4
  },
  limitReached: {
    color: 'red'
  }
}

export default Input;