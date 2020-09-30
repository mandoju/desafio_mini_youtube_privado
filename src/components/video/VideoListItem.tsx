import React from 'react';
import { Divider } from 'react-native-elements';
import { Video } from '@models/Video';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { VideoListItemTag } from './VideoListItemTag';
import { VideoThumbnail } from './VideoThumbnail';
import { VideoListItemHeader } from './VideoListItemHeader';
import { Actions } from 'react-native-router-flux';

interface VideoListItemProps {
  video: Video;
}

export const VideoListItem = ({ video }: VideoListItemProps) => {
  const { id } = video;
  return (
    <TouchableOpacity
      style={{ flex: 0, marginVertical: 5 }}
      key={id}
      onPress={() => {
        Actions['videoDetail']({ video });
      }}
    >
      <VideoThumbnail video={video} />
      <VideoListItemHeader video={video} numberOfLines={2} />

      <Divider />
    </TouchableOpacity>
  );
};
