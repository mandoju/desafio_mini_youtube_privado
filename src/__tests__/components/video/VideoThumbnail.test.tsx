import React from 'react';
import renderer from 'react-test-renderer';

import { VideoThumbnail } from '@components/video/VideoThumbnail';
import { Image, ImageBackground } from 'react-native';

describe('<VideoThumbnail />', () => {
  it('possui a source correta', () => {
    const tree = renderer.create(<VideoThumbnail video={videoMock} />);
    if (tree) {
      const testInstance = tree.root;
      expect(testInstance.findByType(ImageBackground).props.source).toEqual({
        uri: 'https://www.image.com',
      });
    }
  });
});

const videoMock = {
  id: '1',
  thumb: 'https://www.image.com',
  title:
    'RTX 3080 ASUS STRIX e TUF, MSI TRIO e VENTUS VÃO ATRASAR | FABRICANTES REVISAM PROJETOS E MUDAM PCB!',
  description:
    'SEJA MEMRO E AJUDE O CANAL: \n  \
    https://www.youtube.com/channel/UC2E7...  ',
  tags: ['informática', 'gpu'],
  favorite: false,
};
