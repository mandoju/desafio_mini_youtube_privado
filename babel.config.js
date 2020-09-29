module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@assets': './assets',
            '@scenes': './src/scenes',
            '@ducks': './src/ducks',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
