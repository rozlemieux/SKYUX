export default {
  displayName: 'tabs',
  preset: '../../../jest.preset.js',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@babel/preset-react'] }],
  },
};
