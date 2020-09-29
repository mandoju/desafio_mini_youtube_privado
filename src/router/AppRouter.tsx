import React from 'react';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import { LoginScene } from '@scenes/LoginScene';
import { VideoListScene } from '@scenes/VideoListScene/VideoListScene';
import AppTabBar from '@components/router/AppTabBar';

export const AppRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="login"
          component={LoginScene}
          title="Login"
          hideNavBar={true}
        />
        <Tabs key={'main'} tabBarComponent={AppTabBar}>
          <Scene
            key="videoList"
            component={VideoListScene}
            title="Lista de Vídeos"
            hideNavBar={true}
          />
          <Scene
            key="favoriteListe"
            component={VideoListScene}
            title="Lista de Vídeos"
            hideNavBar={true}
          />
          <Scene
            key="settings"
            component={VideoListScene}
            title="Lista de Vídeos"
            hideNavBar={true}
          />
        </Tabs>
      </Stack>
    </Router>
  );
};
