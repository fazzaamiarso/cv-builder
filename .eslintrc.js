module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', 'cypress', 'jest'],
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      //Exluded jest rules on cypress file
      files: 'cypress/**/*.spec.js',
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
