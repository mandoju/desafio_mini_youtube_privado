import React from 'react';
import { Divider, Icon, ListItem } from 'react-native-elements';
import { Video } from '@models/Video';
import { useDispatch } from 'react-redux';
import { favoriteVideo } from '@ducks/video';
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native';
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
    <View style={{ flex: 0, marginVertical: 5 }} key={id}>
      <ImageBackground source={{ uri: video.thumb }} style={styles.thumbnail} />
      <ListItem>
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
      <View style={styles.tagsContainer}>
        {video.tags.map((tag) => {
          return <VideoListItemTag tag={tag} key={tag} />;
        })}
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: { width: screenWidth, height: thumbHeight },
  tagsContainer: { flexDirection: 'row' },
});
