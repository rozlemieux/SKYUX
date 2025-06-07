import { getJestProjects } from '@nx/jest';

export default {
  displayName: 'modals',
  preset: '../../../jest.preset.js',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@babel/preset-react'] }],
  },
};
