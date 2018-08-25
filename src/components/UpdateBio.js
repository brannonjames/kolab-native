import React from 'react';

import { KeyboardAvoidingView, View } from 'react-native';
import TextArea from './TextArea';
import Button from './Button';

export default ({ bio, onChange, handleBioUpdate }) => {
  return (
    <View>
      <TextArea 
        placeholder="Bio"
        value={bio}
        onChange={onChange}
      />
      <Button 
        title="Update Bio"
        onPress={handleBioUpdate}
      />
    </View>
  );
}