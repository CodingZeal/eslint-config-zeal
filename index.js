// eslint-disable-next-line import/no-unused-modules
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import", "import-order-alphabetical"],
  rules: {
    // Enforces getter/setter pairs in objects
    "accessor-pairs": "warn",
    // enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": "off",
    // enforce spacing inside array brackets
    "array-bracket-spacing": "warn",
    // Enforces return statements in callbacks of array's methods
    "array-callback-return": "warn",
    // enforce line breaks after each array element
    "array-element-newline": "off",
    // require braces in arrow function body
    "arrow-body-style": "warn",
    // require parens in arrow function arguments
    "arrow-parens": ["warn", "as-needed"],
    // require space before/after arrow function's arrow
    "arrow-spacing": "warn",
    // treat var statements as if they were block scoped
    "block-scoped-var": "warn",
    // disallow or enforce spaces inside of single line blocks
    "block-spacing": "warn",
    // enforce one true brace style
    "brace-style": "warn",
    // enforce return after a callback
    "callback-return": "warn",
    // require camel case names
    camelcase: "warn",
    // enforce or disallow capitalization of the first letter of a comment,
    "capitalized-comments": "off",
    // enforce that class methods utilize this
    "class-methods-use-this": "off",
    // disallow or enforce trailing commas
    "comma-dangle": "warn",
    // enforce spacing before and after comma
    "comma-spacing": "warn",
    // enforce one true comma style
    "comma-style": "warn",
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ["warn", 3],
    // require or disallow padding inside computed properties
    "computed-property-spacing": "warn",
    // require return statements to either always or never specify values
    "consistent-return": "warn",
    // enforce consistent naming when capturing the current execution context
    "consistent-this": ["warn", "self"],
    // verify calls of super() in constructors
    "constructor-super": "warn",
    // specify curly brace conventions for all control statements
    curly: ["warn", "multi-line"],
    // require default case in switch statements
    "default-case": "warn",
    // enforces consistent newlines before or after dots
    "dot-location": ["warn", "property"],
    // encourages use of dot notation whenever possible
    "dot-notation": "warn",
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": "warn",
    // require the use of === and !==
    eqeqeq: "warn",
    // enforce for loop update clause moving the counter in the right direction.
    "for-direction": "warn",
    // require or disallow spacing between function identifiers and their
    // invocations
    "func-call-spacing": "warn",
    // require function names to match the name of the variable or property to
    // which they are assigned
    "func-name-matching": "warn",
    // require function expressions to have a name
    "func-names": "warn",
    // enforce use of function declarations or expressions
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    // enforce consistent line breaks inside function parentheses
    "function-paren-newline": ["warn", "consistent"],
    // enforce spacing around the * in generator functions
    "generator-star-spacing": ["warn", "after"],
    // enforce return statements in getters
    "getter-return": "warn",
    // enforce require() on top-level module scope
    "global-require": "warn",
    // make sure for-in loops have an if statement
    "guard-for-in": "warn",
    // enforce error handling in callbacks
    "handle-callback-err": "warn",
    // blacklist certain identifiers to prevent them being used
    "id-blacklist": "off",
    // this option enforces minimum and maximum identifier lengths (variable
    // names, property names etc.)
    "id-length": "off",
    // require identifiers to match the provided regular expression
    "id-match": "off",
    // Enforce the location of arrow function bodies with implicit returns
    "implicit-arrow-linebreak": "off",
    // Ensure a default export is present, given a default import
    "import/default": "warn",
    // Enforce a leading comment with the webpackChunkName for dynamic imports
    "import/dynamic-import-chunkname": "warn",
    // Report any invalid exports, i.e. re-export of the same name
    "import/export": "warn",
    // Ensure all exports appear after other statements
    "import/exports-last": "off",
    // Ensure consistent use of file extension within the import path
    "import/extensions": ["warn", "never", { scss: "always" }],
    // Ensure all imports appear before other statements
    "import/first": "warn",
    // Prefer named exports to be grouped together in a single export declaration
    "import/group-exports": "off",
    // Limit the maximum number of dependencies a module can have.
    "import/max-dependencies": "off",
    // Ensure named imports correspond to a named export in the remote file
    "import/named": "error",
    // Ensure imported namespaces contain dereferenced properties as they are
    // dereferenced
    "import/namespace": "warn",
    // Enforce a newline after import statements
    "import/newline-after-import": "warn",
    // Forbid import of modules using absolute paths
    "import/no-absolute-path": "warn",
    // Report AMD require and define calls
    "import/no-amd": "warn",
    // Forbid anonymous values as default exports
    "import/no-anonymous-default-export": "off",
    // Report CommonJS require calls and module.exports or exports.*
    "import/no-commonjs": "off",
    // Forbid a module from importing a module with a dependency path back to itself
    "import/no-cycle": "warn",
    // Forbid default exports
    "import/no-default-export": "off",
    // Report imported names marked with @deprecated documentation tag
    "import/no-deprecated": "warn",
    // Report repeated import of the same module in multiple places
    "import/no-duplicates": "warn",
    // Forbid require() calls with expressions
    "import/no-dynamic-require": "warn",
    // Forbid the use of extraneous packages
    "import/no-extraneous-dependencies": "warn",
    // Prevent importing the submodules of other modules
    "import/no-internal-modules": "off",
    // Forbid the use of mutable exports with var or let.
    "import/no-mutable-exports": "warn",
    // Report use of exported name as identifier of default export
    "import/no-named-as-default": "off",
    // Report use of exported name as property of default export
    "import/no-named-as-default-member": "off",
    // Forbid named default exports.
    "import/no-named-default": "warn",
    // Forbid named exports
    "import/no-named-export": "off",
    // Report namespace imports
    "import/no-namespace": "off",
    // No Node.js builtin modules.
    "import/no-nodejs-modules": "off",
    // Forbid importing modules from parent directories
    "import/no-relative-parent-imports": "off",
    // Restrict which files can be imported in a given folder
    "import/no-restricted-paths": "off",
    // Forbid a module from importing itself
    "import/no-self-import": "warn",
    // Forbid unassigned imports.
    "import/no-unassigned-import": "off",
    // Ensure imports point to a file/module that can be resolved
    "import/no-unresolved": ["error", { commonjs: true }],
    // Report modules without exports, or exports without matching import in
    // another module
    "import/no-unused-modules": [
      "warn",
      {
        missingExports: true,
        unusedExports: true,
      },
    ],
    // Ensures that there are no useless path segments
    "import/no-useless-path-segments": "warn",
    // Forbid Webpack loader syntax in imports
    "import/no-webpack-loader-syntax": "warn",
    // Enforce a convention in module import order
    "import/order": "off",
    // Prefer a default export if module exports a single name
    "import/prefer-default-export": "off",
    // Report potentially ambiguous parse goal (script vs. module)
    "import/unambiguous": "off",
    // eslint-plugin-import/order, but with alphabetical sorting
    "import-order-alphabetical/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    // specify tab or space width for your code
    indent: ["warn", 2, { SwitchCase: 1 }],
    // enforce or disallow variable initializations at definition
    "init-declarations": "warn",
    // specify whether double or single quotes should be used in JSX attributes
    "jsx-quotes": ["warn", "prefer-single"],
    // enforce spacing between keys and values in object literal properties
    "key-spacing": "warn",
    // enforce spacing before and after keywords
    "keyword-spacing": "warn",
    // enforce position of line comments
    "line-comment-position": "off",
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    "linebreak-style": "warn",
    // enforce empty lines around comments
    "lines-around-comment": "warn",
    // require or disallow an empty line between class members
    "lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    // enforce a maximum number of classes per file
    "max-classes-per-file": "off",
    // specify the maximum depth that blocks can be nested
    "max-depth": "warn",
    // specify the maximum length of a line in your program
    "max-len": ["warn", 80, 2],
    // enforce a maximum file length
    "max-lines": "off",
    // enforce a maximum function length
    "max-lines-per-function": "off",
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": ["warn", 3],
    // limits the number of parameters that can be used in the function
    // declaration.
    "max-params": ["warn", 3],
    // specify the maximum number of statement allowed in a function
    "max-statements": "warn",
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": "off",
    // enforce a particular style for multiline comments
    "multiline-comment-style": "off",
    // enforce newlines between operands of ternary expressions
    "multiline-ternary": "off",
    // require a capital letter for constructors
    "new-cap": "warn",
    // disallow the omission of parentheses when invoking a constructor with no
    // arguments
    "new-parens": "warn",
    //  enforce newline after each call when chaining the calls
    "newline-per-chained-call": "off",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "warn",
    // disallow use of the Array constructor
    "no-array-constructor": "warn",
    // disallow using an async function as a Promise executor
    "no-async-promise-executor": "warn",
    // disallow await inside of loops
    "no-await-in-loop": "warn",
    // disallow use of bitwise operators
    "no-bitwise": "warn",
    // disallow use of the Buffer() constructor
    "no-buffer-constructor": "warn",
    // disallow use of arguments.caller or arguments.callee
    "no-caller": "warn",
    // disallow lexical declarations in case clauses
    "no-case-declarations": "warn",
    // disallow modifying variables of class declarations
    "no-class-assign": "warn",
    // disallow comparing against -0
    "no-compare-neg-zero": "warn",
    // disallow assignment in conditional expressions
    "no-cond-assign": "warn",
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": "off",
    // disallow modifying variables that are declared using const
    "no-console": "warn",
    // disallow use of constant expressions in conditions
    "no-const-assign": "warn",
    // disallow use of console in the node environment
    "no-constant-condition": "warn",
    // disallow use of the continue statement
    "no-continue": "warn",
    // disallow control characters in regular expressions
    "no-control-regex": "warn",
    // disallow use of debugger
    "no-debugger": "warn",
    // disallow deletion of variables
    "no-delete-var": "warn",
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": "warn",
    // disallow duplicate arguments in functions
    "no-dupe-args": "error",
    // disallow duplicate name in class members
    "no-dupe-class-members": "warn",
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",
    // disallow a duplicate case label.
    "no-duplicate-case": "error",
    // disallow duplicate module imports
    "no-duplicate-imports": "warn",
    // disallow else after a return in an if
    "no-else-return": "warn",
    // disallow empty statements
    "no-empty": "warn",
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": "warn",
    // disallow use of empty functions
    "no-empty-function": "warn",
    // disallow use of empty destructuring patterns
    "no-empty-pattern": "warn",
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": "warn",
    // disallow use of eval()
    "no-eval": "warn",
    // disallow assigning to the exception in a catch block
    "no-ex-assign": "warn",
    // disallow adding to native types
    "no-extend-native": "warn",
    // disallow unnecessary function binding
    "no-extra-bind": "warn",
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": "warn",
    // disallow unnecessary labels
    "no-extra-label": "warn",
    // disallow unnecessary parentheses
    "no-extra-parens": ["warn", "functions"],
    // disallow unnecessary semicolons
    "no-extra-semi": "warn",
    // disallow fallthrough of case statements
    "no-fallthrough": "warn",
    // disallow the use of leading or trailing decimal points in numeric
    // literals
    "no-floating-decimal": "warn",
    // disallow overwriting functions written as function declarations
    "no-func-assign": "warn",
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "warn",
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": "warn",
    // disallow var and named functions in global scope
    "no-implicit-globals": "warn",
    // disallow use of eval()-like methods
    "no-implied-eval": "warn",
    // disallow comments inline after code
    "no-inline-comments": "off",
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": ["warn", "both"],
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": "warn",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "off",
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "warn",
    // disallow usage of __iterator__ property
    "no-iterator": "warn",
    // disallow labels that share a name with a variable
    "no-label-var": "warn",
    // disallow use of labeled statements
    "no-labels": "warn",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "warn",
    // disallow if as the only statement in an else block
    "no-lonely-if": "warn",
    // disallow creation of functions within loops
    "no-loop-func": "warn",
    // disallow the use of magic numbers
    "no-magic-numbers": "off",
    // Disallow characters which are made with multiple code points in character class syntax
    // comparison
    "no-misleading-character-class": "warn",
    // disallow mixes of different operators
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
      },
    ],
    // disallow mixing regular variable and require declarations
    "no-mixed-requires": "warn",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": "warn",
    // disallow use of chained assignment expressions
    "no-multi-assign": "off",
    // disallow use of multiple spaces
    "no-multi-spaces": "warn",
    // disallow use of multiline strings
    "no-multi-str": "warn",
    // disallow multiple empty lines
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    // disallow negated conditions
    "no-negated-condition": "warn",
    // disallow nested ternary expressions
    "no-nested-ternary": "warn",
    // disallow use of the new operator when not part of an assignment or
    "no-new": "warn",
    // disallow use of new operator for Function object
    "no-new-func": "warn",
    // disallow the use of the Object constructor
    "no-new-object": "warn",
    // disallow use of new operator with the require function
    "no-new-require": "warn",
    // disallow use of the new operator with the Symbol object
    "no-new-symbol": "warn",
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": "warn",
    // disallow the use of object properties of the global object (Math and
    // JSON) as functions
    "no-obj-calls": "warn",
    // disallow use of octal literals
    "no-octal": "warn",
    // disallow use of octal escape sequences in string literals, such as var
    // foo = "Copyright \251";
    "no-octal-escape": "warn",
    // disallow reassignment of function parameters
    "no-param-reassign": "warn",
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "warn",
    // disallow use of unary operators, ++ and --
    "no-plusplus": "warn",
    // disallow use of process.env
    "no-process-env": "warn",
    // disallow process.exit()
    "no-process-exit": "warn",
    // disallow usage of __proto__ property
    "no-proto": "warn",
    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": "warn",
    // disallow declaring the same variable more than once
    "no-redeclare": "error",
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": "warn",
    // restrict usage of specified global variables
    "no-restricted-globals": "off",
    // restrict usage of specified node imports
    "no-restricted-imports": "off",
    // restrict usage of specified node modules
    "no-restricted-modules": "off",
    // disallow certain properties on certain objects
    "no-restricted-properties": "off",
    // disallow use of certain syntax in code
    "no-restricted-syntax": "off",
    // disallow use of assignment in return statement
    "no-return-assign": "warn",
    // Disallows unnecessary return await
    "no-return-await": "warn",
    // disallow use of javascript: urls.
    "no-script-url": "warn",
    // disallow assignments where both sides are exactly the same
    "no-self-assign": "warn",
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "warn",
    // disallow use of the comma operator
    "no-sequences": "warn",
    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "warn",
    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "warn",
    // disallow sparse arrays
    "no-sparse-arrays": "warn",
    // disallow use of synchronous methods
    "no-sync": "warn",
    // Disallow tabs in file
    "no-tabs": "warn",
    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": "warn",
    // disallow the use of ternary operators
    "no-ternary": "off",
    // disallow use of this/super before calling super() in constructors.
    "no-this-before-super": "warn",
    // restrict what can be thrown as an exception
    "no-throw-literal": "warn",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "warn",
    // disallow use of undeclared variables unless mentioned in a /*global */
    // block
    "no-undef": "error",
    // disallow use of undefined when initializing variables
    "no-undef-init": "warn",
    // disallow use of undefined variable
    "no-undefined": "off",
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": "warn",
    // disallow unmodified conditions of loops
    "no-unmodified-loop-condition": "warn",
    // disallow the use of ternary operators when a simpler alternative exists
    "no-unneeded-ternary": "warn",
    // disallow unreachable statements after a return, throw, continue, or
    // break statement
    "no-unreachable": "warn",
    // disallow control flow statements in finally blocks
    "no-unsafe-finally": "warn",
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "warn",
    // disallow usage of expressions in statement position
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    // disallow unused labels
    "no-unused-labels": "warn",
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // disallow use of variables before they are defined
    "no-use-before-define": ["warn", "nofunc"],
    // disallow unnecessary .call() and .apply()
    "no-useless-call": "warn",
    // Disallow unnecessary catch clauses
    "no-useless-catch": "warn",
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "warn",
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "warn",
    // disallow unnecessary constructor
    "no-useless-constructor": "warn",
    // disallow unnecessary escape characters
    "no-useless-escape": "warn",
    // disallow renaming import, export, and destructured assignments to the
    // same name
    "no-useless-rename": "warn",
    // Disallow redundant return statements
    "no-useless-return": "warn",
    // require let or const instead of var
    "no-var": "warn",
    // disallow use of the void operator
    "no-void": "warn",
    // disallow usage of configurable warning terms in comments - e.g. TODO
    // or FIXME
    "no-warning-comments": "warn",
    // disallow whitespace before properties
    "no-whitespace-before-property": "warn",
    // disallow use of the with statement
    "no-with": "warn",
    // enforce the location of single-line statements
    "nonblock-statement-body-position": "warn",
    // enforce consistent line breaks inside braces
    "object-curly-newline": "off",
    // require or disallow padding inside curly braces
    "object-curly-spacing": ["warn", "always"],
    // enforce placing object properties on separate lines
    "object-property-newline": "off",
    // require method and property shorthand syntax for object literals
    "object-shorthand": "warn",
    // require or disallow one variable declaration per function
    "one-var": ["warn", "never"],
    // require or disallow an newline around variable declarations
    "one-var-declaration-per-line": "warn",
    // require assignment operator shorthand where possible or prohibit it
    // entirely
    "operator-assignment": ["warn", "always"],
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": "warn",
    // enforce padding within blocks
    "padded-blocks": ["warn", "never"],
    // require or disallow padding lines between statements
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      { blankLine: "always", next: "*", prev: "directive" },
      { blankLine: "any", next: "directive", prev: "directive" },
    ],
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": "warn",
    // suggest using const declaration for variables that are never modified
    // after declared
    "prefer-const": "warn",
    // require destructuring from arrays and/or objects
    "prefer-destructuring": "warn",
    // Suggest using named capture group in regular expression
    "prefer-named-capture-group": "off",
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "warn",
    // Prefer use of an object spread over Object.assign
    "prefer-object-spread": "warn",
    // require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": "off",
    // suggest using the rest parameters instead of arguments
    "prefer-rest-params": "warn",
    // suggest using the spread operator instead of .apply().
    "prefer-spread": "warn",
    // suggest using template literals instead of strings concatenation
    "prefer-template": "warn",
    // require quotes around object literal property names
    "quote-props": ["warn", "as-needed"],
    // specify whether backticks, double or single quotes should be used
    quotes: ["warn", "single", "avoid-escape"],
    // require use of the second argument for parseInt()
    radix: "warn",
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": "warn",
    // disallow async functions which have no await expression
    "require-await": "warn",
    // Enforce the use of u flag on RegExp
    "require-unicode-regexp": "warn",
    // disallow generator functions that do not have yield
    "require-yield": "warn",
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "warn",
    // require or disallow use of semicolons instead of ASI
    semi: ["warn", "never"],
    // enforce spacing before and after semicolons
    "semi-spacing": "warn",
    // enforce location of semicolons
    "semi-style": ["warn", "last"],
    // sort import declarations within module
    "sort-imports": "off",
    // requires object keys to be sorted
    "sort-keys": ["warn", "asc", { natural: true }],
    // sort variables within the same declaration block
    "sort-vars": "off",
    // require or disallow a space before blocks
    "space-before-blocks": "warn",
    // require or disallow a space before function opening parenthesis
    "space-before-function-paren": ["warn", "never"],
    // require or disallow spaces inside parentheses
    "space-in-parens": "warn",
    // require spaces around operators
    "space-infix-ops": "warn",
    // require or disallow spaces before/after unary operators
    "space-unary-ops": "warn",
    // require or disallow a space immediately following the // or /* in a
    // comment
    "spaced-comment": "warn",
    // controls location of Use Strict Directives
    strict: ["warn", "never"],
    // enforce spacing around colons of switch statements
    "switch-colon-spacing": "warn",
    // require symbol descriptions
    "symbol-description": "warn",
    // enforce spacing around embedded expressions of template strings
    "template-curly-spacing": "warn",
    // Require or disallow spacing between template tags and their literals
    "template-tag-spacing": "warn",
    // require or disallow the Unicode BOM
    "unicode-bom": "warn",
    // disallow comparisons with the value NaN
    "use-isnan": "warn",
    // Ensure that the results of typeof are compared against a valid string
    "valid-typeof": "warn",
    // require declaration of all vars at the top of their containing scope
    "vars-on-top": "warn",
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": "warn",
    // require regex literals to be wrapped in parentheses
    "wrap-regex": "warn",
    // enforce spacing around the * in yield* expressions
    "yield-star-spacing": "warn",
    // require or disallow Yoda conditions
    yoda: "warn",
  },
  settings: {
    "import/ignore": ["node_modules", ".(scss|sass|less|css|png|jpg|svg)$"],
  },
};
