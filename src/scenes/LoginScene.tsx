import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LoginScene = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
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
