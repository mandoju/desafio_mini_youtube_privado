import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const VideoListItemTag = ({ tag }: { tag: string }) => {
  return (
    <Button
      title={tag}
      type={'outline'}
      titleStyle={styles.titleStyle}
      containerStyle={styles.containerStyle}
      key={tag}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: { fontSize: 13 },
  containerStyle: { marginHorizontal: 10, marginVertical: 10 },
});
