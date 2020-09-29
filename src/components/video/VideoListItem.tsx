import React from 'react';
import { Button, Divider, Icon, ListItem } from 'react-native-elements';
import { Video } from '@models/Video';
import { useDispatch } from 'react-redux';
import { favoriteVideo } from '@ducks/video';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { VideoListItemTag } from './VideoListItemTag';

const screenWidth = Math.round(Dimensions.get('window').width);
const thumbHeight = (screenWidth * 9) / 16;

interface VideoListItemProps {
  video: Video;
}

export const VideoListItem = ({ video }: VideoListItemProps) => {
  const dispatch = useDispatch();
  const { id, favorite } = video;
  return (
    <View style={{ flex: 0, marginVertical: 5 }}>
      <ImageBackground
        source={{ uri: video.thumb }}
        style={{ width: screenWidth, height: thumbHeight }}
      />
      <ListItem key={id}>
        <Icon
          name={favorite ? 'star' : 'star-border'}
          size={24}
          onPress={() => dispatch(favoriteVideo({ id }))}
        />
        <ListItem.Content>
          <ListItem.Title numberOfLines={2}>{video.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <View style={{ flexDirection: 'row', justifyContent: 'row' }}>
        {video.tags.map((tag) => {
          return <VideoListItemTag tag={tag} />;
        })}
      </View>
      <Divider />
    </View>
  );
};
