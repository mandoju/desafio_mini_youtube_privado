import React from 'react';
import { Button } from 'react-native-elements';

export const VideoListItemTag = ({ tag }: { tag: string }) => {
  return (
    <Button
      title={tag}
      type={'outline'}
      titleStyle={{ fontSize: 13 }}
      containerStyle={{ marginHorizontal: 10, marginVertical: 10 }}
    />
  );
};
