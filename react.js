module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],

  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': 'warn',
    // Forbid certain props on Components
    'react/forbid-component-props': 'off',
    //  Forbid certain elements
    'react/forbid-elements': 'off',
    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'off',
    // Forbid certain propTypes
    'react/forbid-prop-types': 'warn',
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'warn',
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 'warn',
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': 'warn',
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': 'off',
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'warn',
    // Validate props indentation in JSX
    'react/jsx-indent-props': ['warn', 4],
    // Validate JSX indentation
    'react/jsx-indent': ['warn', 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'warn',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 'off',
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 'off',
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'warn',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'warn',
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'warn',
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'warn',
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'warn',
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 'off',
    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': 'warn',
    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': 'warn',
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'warn',
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'warn',
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 'warn',
    //  Prevent using Array index in key props
    'react/no-array-index-key': 'warn',
    // Prevent passing of children as props
    'react/no-children-prop': 'warn',
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',
    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'warn',
    // Prevent usage of deprecated methods
    'react/no-deprecated': 'warn',
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'warn',
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'warn',
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'warn',
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'warn',
    // Prevent usage of isMounted
    'react/no-is-mounted': 'warn',
    // Prevent multiple component definition per file
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'warn',
    // Prevent usage of setState
    'react/no-set-state': 'off',
    // Prevent using string references in ref attribute
    'react/no-string-refs': 'warn',
    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'warn',
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'warn',
    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'warn',
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'warn',
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 'warn',
    // Prevent missing props validation in a React component definition
    'react/prop-types': 'off',
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'warn',
    // Enforce a defaultProps definition for every prop that is not a required
    // prop
    'react/require-default-props': 'off',
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'warn',
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'warn',
    // Enforce component methods order
    'react/sort-comp': 'warn',
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['warn', {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: true
    }],
    // Enforce style prop value being an object
    'react/style-prop-object': 'warn',
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'warn'
  }
}
