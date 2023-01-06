module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).tsx?(x)'],
  snapshotResolver: '<rootDir>/snapshotResolver.js',
};
