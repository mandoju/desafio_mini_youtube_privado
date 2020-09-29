import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const VideoListScene = () => {
  return (
    <View style={styles.container}>
      <Text>Tela com lista de Vídeos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
