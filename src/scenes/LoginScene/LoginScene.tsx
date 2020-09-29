import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';

export const LoginScene = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.topContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.centerContainer}>
        <Input
          label="Email"
          placeholder="Digite seu Email aqui"
          leftIcon={<Icon name="mail" size={24} color="black" />}
        />
        <Input
          label="Senha"
          placeholder="Digite sua Senha Aqui"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <View style={{ flex: 1 / 3, alignItems: 'center', paddingTop: 10 }}>
          <Button title={'Entrar'} />
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Esquece a senha</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: '3%',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 2,
    minHeight: 230,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
