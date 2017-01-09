module.exports = {
  env: {
    jest: true
  },
  plugins: [
    'jest'
  ],
  rules: {
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // specify the maximum number of statement allowed in a function
    'max-statements': 'off',
    // disallow exclusive tests
    'jest/no-exclusive-tests': 'warn',
    // disallow identical titles
    'jest/no-identical-title': 'warn'
  }
}
