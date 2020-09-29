import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { LoginScene } from '@scenes/LoginScene';

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
      </Stack>
    </Router>
  );
};
