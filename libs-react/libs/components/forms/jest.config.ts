export default {
  displayName: 'forms',
  preset: '../../../jest.preset.js',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@babel/preset-react'] }],
  },
};
