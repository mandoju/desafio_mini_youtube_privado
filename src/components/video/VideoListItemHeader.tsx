import { favoriteVideo } from '@ducks/video';
import { Video } from '@models/Video';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { VideoListItemTag } from './VideoListItemTag';

export const VideoListItemHeader = ({
  video,
  numberOfLines,
}: {
  video: Video;
  numberOfLines?: number;
}) => {
  const { id, favorite } = video;
  const dispatch = useDispatch();
  return (
    <>
      <ListItem>
        <Icon
          name={favorite ? 'star' : 'star-border'}
          size={24}
          onPress={() => dispatch(favoriteVideo({ id }))}
        />
        <ListItem.Content>
          <ListItem.Title numberOfLines={numberOfLines}>
            {video.title}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <View style={styles.tagsContainer}>
        {video.tags.map((tag) => {
          return <VideoListItemTag tag={tag} key={tag} />;
        })}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  tagsContainer: { flexDirection: 'row' },
});
