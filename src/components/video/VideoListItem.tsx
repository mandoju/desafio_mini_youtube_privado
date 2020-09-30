import React from 'react';
import { Divider } from 'react-native-elements';
import { Video } from '@models/Video';
import { TouchableOpacity } from 'react-native';
import { VideoThumbnail } from './VideoThumbnail';
import { VideoListItemHeader } from './VideoListItemHeader';
import { Actions } from 'react-native-router-flux';

interface VideoListItemProps {
  video: Video;
  detailSceneKey: string;
}

export const VideoListItem = ({
  video,
  detailSceneKey,
}: VideoListItemProps) => {
  const { id } = video;
  return (
    <TouchableOpacity
      style={{ flex: 0, marginVertical: 5 }}
      key={id}
      onPress={() => {
        const action = Actions[detailSceneKey];
        if (action) action({ video });
        else {
          console.log('error: rota inexistente');
        }
      }}
    >
      <VideoThumbnail video={video} />
      <VideoListItemHeader video={video} numberOfLines={2} />
      <Divider />
    </TouchableOpacity>
  );
};
