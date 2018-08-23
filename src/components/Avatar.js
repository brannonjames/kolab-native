import React from 'react';
import { View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AVATAR_LARGE = 120;
const AVATAR_SMALL = 34

export default ({ uri, size, style }) => {
  const avatarSize = size === 'large' ? AVATAR_LARGE : AVATAR_SMALL;

  const avatarSizeStyle = { 
    height: avatarSize, 
    width: avatarSize, 
    borderRadius: avatarSize / 2
  }  

  if (uri) {
    return (
        <Image 
          source={{ uri }} 
          style={[avatarSizeStyle, style]}
        />
    );
  }
  return (
    <View style={[styles.avatarStyle, avatarSizeStyle, style]}>
      <Ionicons name={'ios-person'} size={avatarSize} />;
    </View>
  )

}

const styles = {
  avatarStyle: {
    // overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F1F2',
    borderColor: 'rgba(66,66,66,0.4)',
    borderWidth: 1
  },
  avatarImageStyle: {
    height: undefined,
    width: undefined,
    flex: 1
  }
}