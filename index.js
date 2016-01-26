module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  ecmaFeatures: {
    modules: true
  },

  globals: {},
  rules: {
    //
    // Possible Errors
    //
    // disallow or enforce trailing commas
    'comma-dangle': 1,
    // disallow assignment in conditional expressions
    'no-cond-assign': 1,
    // disallow use of console in the node environment
    'no-console': 1,
    // disallow use of constant expressions in conditions
    'no-constant-condition': 1,
    // disallow control characters in regular expressions
    'no-control-regex': 1,
    // disallow use of debugger
    'no-debugger': 1,
    // disallow duplicate arguments in functions
    'no-dupe-args': 1,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 1,
    // disallow a duplicate case label.
    'no-duplicate-case': 1,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 1,
    // disallow empty statements
    'no-empty': 1,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 1,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 1,
    // disallow unnecessary parentheses
    'no-extra-parens': 1,
    // disallow unnecessary semicolons
    'no-extra-semi': 1,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 1,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': [1, 'both'],
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 1,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 1,
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 1,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 1,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 1,
    // disallow sparse arrays
    'no-sparse-arrays': 1,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 1,
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 1,
    // disallow comparisons with the value NaN
    'use-isnan': 1,
    // Ensure JSDoc comments are valid
    'valid-jsdoc': 1,
    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 1,
  }
};
