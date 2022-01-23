module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/cypress/'], //ignore test files in cypress
};
