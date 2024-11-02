module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react-native/no-inline-styles': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': ['error', {allow: ['warn']}],
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-key': ['error', {checkFragmentShorthand: true}],
      },
    },
  ],
  env: {
    jest: true,
  },
};
