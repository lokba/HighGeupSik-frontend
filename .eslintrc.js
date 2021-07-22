module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/self-closing-comp': 0,
    'no-unused-vars': 0,
  },
  extends: ['airbnb'],
  parserOptions: {
    project: './jsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
