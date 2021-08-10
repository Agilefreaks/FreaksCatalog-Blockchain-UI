const path = require('path');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      configFile: path.join(__dirname, '.babelrc'),
    },
  },
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': [ 0 ],
    'array-bracket-spacing': [ 2, 'always' ],
    'template-curly-spacing': [ 2, 'always' ],
    'object-curly-newline': [ 2, { multiline: true, consistent: true } ],
    'operator-linebreak': [ 2, 'after', { overrides: { '?': 'before', ':': 'before' } } ],
    'react/jsx-curly-spacing': [ 2, { when: 'always', children: true } ],
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'react/jsx-boolean-value': [ 0 ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  ignorePatterns: [ 'node_modules/**/*', 'build/**/*' ],
};
