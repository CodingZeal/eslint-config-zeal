module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],

  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': 1,
    // Forbid certain props on Components
    'react/forbid-component-props': 0,
    // Forbid certain propTypes
    'react/forbid-prop-types': 1,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 1,
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 1,
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': 1,
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': 0,
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 1,
    // Validate props indentation in JSX
    'react/jsx-indent-props': [1, 4],
    // Validate JSX indentation
    'react/jsx-indent': [1, 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 1,
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 0,
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 0,
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 1,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 1,
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 1,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 1,
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 1,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': 1,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 1,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 1,
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 1,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 1,
    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 0,
    // Prevent usage of deprecated methods
    'react/no-deprecated': 1,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 1,
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 1,
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 1,
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 1,
    // Prevent usage of isMounted
    'react/no-is-mounted': 1,
    // Prevent multiple component definition per file
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 1,
    // Prevent usage of setState
    'react/no-set-state': 1,
    // Prevent using string references in ref attribute
    'react/no-string-refs': 1,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 1,
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 1,
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 1,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 0,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 1,
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 0,
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 1,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 1,
    // Enforce component methods order
    'react/sort-comp': 1,
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [1, {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true
    }]
  }
}
