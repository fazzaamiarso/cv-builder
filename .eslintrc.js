module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'cypress', 'jest'],
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jest/no-focused-tests': 'warn',
  },
  overrides: [
    {
      //Exluded jest expect rule on cypress file
      files: 'cypress/**/*.spec.js',
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
};
