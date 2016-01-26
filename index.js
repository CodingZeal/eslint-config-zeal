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

    //
    // Best Practices
    //
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 1,
    // treat var statements as if they were block scoped
    'block-scoped-var': 1,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [1, 2],
    // require return statements to either always or never specify values
    'consistent-return': 1,
    // specify curly brace conventions for all control statements
    'curly': [1, 'multi-line'],
    // require default case in switch statements
    'default-case': 1,
    // enforces consistent newlines before or after dots
    'dot-location': [1, 'property'],
    // encourages use of dot notation whenever possible
    'dot-notation': 1,
    // require the use of === and !==
    'eqeqeq': 1,
    // make sure for-in loops have an if statement
    'guard-for-in': 1,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 1,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 1,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 1,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 1,
    // disallow else after a return in an if
    'no-else-return': 1,
    // disallow use of labels for anything other than loops and switches
    'no-empty-label': 1,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 1,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 1,
    // disallow use of eval()
    'no-eval': 1,
    // disallow adding to native types
    'no-extend-native': 1,
    // disallow unnecessary function binding
    'no-extra-bind': 1,
    // disallow fallthrough of case statements
    'no-fallthrough': 1,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 1,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 1,
    // disallow use of eval()-like methods
    'no-implied-eval': 1,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 1,
    // disallow usage of __iterator__ property
    'no-iterator': 1,
    // disallow use of labeled statements
    'no-labels': 1,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 1,
    // disallow creation of functions within loops
    'no-loop-func': 1,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 1,
    // disallow use of multiline strings
    'no-multi-str': 1,
    // disallow reassignments of native objects
    'no-native-reassign': 1,
    // disallow use of new operator for Function object
    'no-new-func': 1,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 1,
    // disallow use of the new operator when not part of an assignment or comparison
    'no-new': 1,
    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal-escape': 1,
    // disallow use of octal literals
    'no-octal': 1,
    // disallow reassignment of function parameters
    'no-param-reassign': 1,
    // disallow use of process.env
    'no-process-env': 1,
    // disallow usage of __proto__ property
    'no-proto': 1,
    // disallow declaring the same variable more than once
    'no-redeclare': 1,
    // disallow use of assignment in return statement
    'no-return-assign': 1,
    // disallow use of javascript: urls.
    'no-script-url': 1,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 1,
    // disallow use of the comma operator
    'no-sequences': 1,
    // restrict what can be thrown as an exception
    'no-throw-literal': 1,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 1,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 1,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 1,
    // disallow use of the void operator
    'no-void': 1,
    // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    'no-warning-comments': 1,
    // disallow use of the with statement
    'no-with': 1,
    // require use of the second argument for parseInt()
    'radix': 1,
    // require declaration of all vars at the top of their containing scope
    'vars-on-top': 1,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 1,
    // require or disallow Yoda conditions
    'yoda': 1,

    //
    // Strict Mode
    //
    // controls location of Use Strict Directives
    'strict': [1, 'never']
  }
};
