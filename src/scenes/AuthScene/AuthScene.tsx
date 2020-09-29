import { autoFavoriteVideos } from '@ducks/video';
import React, { useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch } from 'react-redux';
import { autoLogin } from '../../ducks/user';

export const AuthScene = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function mount() {
      const login = await AsyncStorage.getItem('login');
      if (!login) {
        Actions.replace('login');
        return;
      }
      const favoriteVideos = await AsyncStorage.getItem('favorites');
      if (favoriteVideos) {
        const videos = JSON.parse(favoriteVideos);
        dispatch(autoFavoriteVideos({ videos }));
      }
      dispatch(autoLogin({ login, callback: () => Actions.replace('main') }));
      return;
    }
    mount();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
// const getValueFromAsyncStorage = (prop:) => {
//     try {
//       const value: string | null = await AsyncStorage.getItem(prop);
//       if (value !== null) {
//         return JSON.parse(value);
//       }
//     } catch (error) {
//       throw Error('Async -> getValue');
//     }
// }
