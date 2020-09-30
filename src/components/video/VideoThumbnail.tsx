import { Video } from '@models/Video';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const thumbHeight = (screenWidth * 9) / 16;

export const VideoThumbnail = ({ video }: { video: Video }) => {
  return (
    <ImageBackground source={{ uri: video.thumb }} style={styles.thumbnail} />
  );
};

const styles = StyleSheet.create({
  thumbnail: { width: screenWidth, height: thumbHeight },
});
