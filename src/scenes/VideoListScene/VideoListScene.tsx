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
import video, { getVideos } from '@ducks/video';

export const VideoListScene = () => {
  const videos = useSelector((state: RootStateType) => state.video.videos);
  const loading = useSelector(
    (state: RootStateType) => state.video.loadingMoreVideos,
  );
  const [pageIndex, setPageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (videos.length == 0 && !loading) dispatch(getVideos({ pageIndex: 0 }));
  }, []);

  if (videos.length == 0) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
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
