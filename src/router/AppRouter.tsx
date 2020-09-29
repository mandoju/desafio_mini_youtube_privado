import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { LoginScene } from '@scenes/LoginScene';
import { VideoListScene } from '@scenes/VideoListScene/VideoListScene';

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
        <Scene
          key="videoList"
          component={VideoListScene}
          title="Login"
          hideNavBar={true}
        />
      </Stack>
    </Router>
  );
};
