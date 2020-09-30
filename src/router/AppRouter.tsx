import React from 'react';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import { LoginScene } from '@scenes/LoginScene';
import { VideoListScene } from '@scenes/VideoListScene/VideoListScene';
import { AuthScene } from '@scenes/AuthScene/AuthScene';
import AppTabBar from '@components/router/AppTabBar';
import { VideoDetailScene } from '@scenes/VideoDetailScene/VideoDetailScene';
import { FavoriteVideoListScene } from '@scenes/FavoriteVideoListScene/FavoriteListScene';

export const AppRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="auth"
          component={AuthScene}
          title="Login"
          hideNavBar={true}
          initial={true}
        />
        <Scene
          key="login"
          component={LoginScene}
          title="Login"
          hideNavBar={true}
        />
        <Tabs key={'main'} tabBarComponent={AppTabBar}>
          <Scene key="videos" hideNavBar={true} initial={true}>
            <Scene
              key="videoList"
              component={VideoListScene}
              title="Lista de Vídeos"
              hideNavBar={true}
              initial={true}
            />
            <Scene
              key="videoDetail"
              component={VideoDetailScene}
              title="Detalhe do vídeo"
              back={true}
            />
          </Scene>
          <Scene key="favorites" hideNavBar={true}>
            <Scene
              key="favoritesList"
              component={FavoriteVideoListScene}
              title="Lista de Vídeos Favoritos"
              hideNavBar={true}
            />
            <Scene
              key="favoriteDetail"
              component={VideoDetailScene}
              title="Detalhe do favorito"
              back={true}
            />
          </Scene>
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
