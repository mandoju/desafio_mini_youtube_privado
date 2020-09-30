import { VideoListItemHeader } from '@components/video/VideoListItemHeader';
import { VideoThumbnail } from '@components/video/VideoThumbnail';
import { Video } from '@models/Video';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';

export const VideoDetailScene = ({ video }: { video: Video }) => {
  return (
    <ScrollView style={styles.container}>
      <VideoThumbnail video={video} />
      <VideoListItemHeader video={video} />
      <Divider style={{ marginVertical: 10 }} />
      <Text>{video.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
