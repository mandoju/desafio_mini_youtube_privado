import React from 'react';
import YoutubeLogo from '@assets/youtube-logo.png';
import { ImageBackground, View } from 'react-native';

export const LoginSceneLogo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <ImageBackground
        source={YoutubeLogo}
        resizeMode={'contain'}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};
