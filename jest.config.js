module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/cypress/'], //ignore test files in cypress
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js', //make jest able to mock/ignore import non-js module
  },
};
