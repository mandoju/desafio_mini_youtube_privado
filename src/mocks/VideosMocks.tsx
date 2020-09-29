import { Video } from '@models/Video';

const firstVideoMock: Video[] = [
  {
    id: '1',
    thumb:
      'https://i.ytimg.com/vi/B1qVHSsWr94/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCAuYxkRd22lOzXLEsCF7g3NjuOaA',
    title:
      'RTX 3080 ASUS STRIX e TUF, MSI TRIO e VENTUS VÃO ATRASAR | FABRICANTES REVISAM PROJETOS E MUDAM PCB!',
    description:
      'SEJA MEMRO E AJUDE O CANAL: \n  \
    https://www.youtube.com/channel/UC2E7...  ',
    tags: ['informática', 'gpu'],
    favorite: false,
  },
  {
    id: '2',
    thumb:
      'https://i.ytimg.com/vi/Z2s-q34FX7c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAgy3E5QCoJhe2Vf_bIafJdjcdeqw',
    title: "This PC SHOULDN'T Be Possible",
    description:
      'Thanks to Seasonic for sponsoring this video! Buy Seasonic products:',
    tags: ['informática'],
    favorite: false,
  },
  {
    id: '3',
    thumb:
      'https://i.ytimg.com/vi/jW7KMvmRfjs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDPboXcw0QtLtDJAXJlqP-Rb70Owg',
    title: '[Aula 05] CURSO de impressão 3D GRATUITO com o Cura - aba "Shell"',
    description:
      'Esse vídeo faz parte de uma série com um curso de impressão 3D gratuito, vou compartilhar todo meu conhecimento no fatiador cura com você!\n \
        E hoje veremos algumas das configurações personalizadas da aba "Shell"',
    tags: ['3d', 'impressora', 'aula'],
    favorite: false,
  },
];

const secondVideoMock: Video[] = [
  {
    id: '4',
    thumb:
      'https://i.ytimg.com/vi/NQ9Tzvh__XU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD4VKdD9XY2bhfcOllCUMYYlkxhCQ',
    title: 'Governo divulga calendário do pagamento do auxílio de R$300',
    description:
      'O Ministério da Cidadania divulgou nesta segunda-feira (28), o calendário de pagamentos das parcelas de R$ 300 do Auxílio Emergencial para beneficiários.',
    tags: ['notícias'],
    favorite: false,
  },
  {
    id: '5',
    thumb:
      'https://i.ytimg.com/vi/bG8dlxTX3AI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtmNEHmJOD9L9uzsP2-_wxtsCpHA',
    title: 'Triple (x3) your Layer Strength by Annealing 3D Prints in Plaster!',
    description:
      "In the past, I've already tried many different techniques to fuse 3D printing layers together by annealing or coating but never had great success. This time I embedded PLA and PETG 3D prints in plaster and then annealed them at temperatures over their melting point to see if we can fuse the layers together and how their heat resistance changes. Let's find out more!",
    tags: ['3d', 'impressora'],
    favorite: false,
  },
  {
    id: '6',
    thumb:
      'https://i.ytimg.com/vi/FO9mWvJAugQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAOEyoIejAG6qwvGXBddiX-EqmkpQ',
    title: 'Calling Scammers by their real names',
    description:
      'This group of popup scammers got a little more than they bargained for after I called them.',
    tags: ['diversão'],
    favorite: false,
  },
];

export const getMock = (key: number): Video[] | undefined => {
  switch (key) {
    case 0:
      return firstVideoMock;
    case 1:
      return secondVideoMock;
    default:
      return undefined;
  }
};
