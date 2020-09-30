import React, { useState } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType, USER_LOGOUT } from '@ducks/index';
import { Actions } from 'react-native-router-flux';

export const SettingsScene = () => {
  const login = useSelector((state: RootStateType) => state.user.login);
  const [signingOut, setSigningOut] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text h4>Usuário: {login}</Text>
      <Button
        title={'Deslogar'}
        style={{ marginVertical: 10 }}
        onPress={async () => {
          setSigningOut(true);
          await signout();
          dispatch({ type: USER_LOGOUT });
          Actions.replace('auth');
        }}
        loading={signingOut}
      />
    </View>
  );
};

const signout = async () => {
  await AsyncStorage.removeItem('login');
  await AsyncStorage.removeItem('favorites');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
