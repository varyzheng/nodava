module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': 'google',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    // 'semi': [2, 'never'], // Although I think it is ugly to write a semicolon, Google and Airbnb think it should be written.
  }
};
