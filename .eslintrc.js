module.exports = {
  extends: [
    "react-app",
    "plugin:cypress/recommended",
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["react", "jest", "cypress"],
  env: {
    browser: true,
    "cypress/globals": true,
    es6: true,
    "jest/globals": true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
