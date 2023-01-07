module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element/*|src/__mocks__)',
  ],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).tsx?(x)'],
  snapshotResolver: '<rootDir>/snapshotResolver.js',
};
