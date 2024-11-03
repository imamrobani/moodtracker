module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@libraries': './src/libraries',
          '@reduxhooks': './src/redux/hooks.ts',
          '@slice': './src/redux/slice',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
