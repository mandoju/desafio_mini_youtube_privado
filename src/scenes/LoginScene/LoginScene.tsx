import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LoginSceneForm } from './components/LoginSceneForm';
import { LoginSceneLogo } from './components/LoginSceneLogo';

export const LoginScene = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.topContainer}>
          <LoginSceneLogo />
        </View>
        <View style={styles.centerContainer}>
          <LoginSceneForm />
        </View>
        <View style={styles.topContainer}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Esquece a senha</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: '3%',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 0,
    height: 280,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
