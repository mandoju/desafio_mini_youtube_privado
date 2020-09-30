import { RootStateType } from '@ducks/index';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import { VideoListItem } from '../../components/video/VideoListItem';
import { useDispatch } from 'react-redux';
import { getVideos } from '@ducks/video';
import { Text } from 'react-native-elements';

export const FavoriteVideoListScene = () => {
  const videos = useSelector(
    (state: RootStateType) => state.video.favoriteVideos,
  );
  const [pageIndex, setPageIndex] = useState(0);
  const dispatch = useDispatch();

  if (videos.length == 0) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center' }]}>
        <Text h4 style={{ textAlign: 'center' }}>
          Você Não possui videos favoritos
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoListItem video={item} detailSceneKey={'favoriteDetail'} />
        )}
        onEndReached={() => {
          if (pageIndex < 2) {
            dispatch(getVideos({ pageIndex: pageIndex + 1 }));
            setPageIndex(pageIndex + 1);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
