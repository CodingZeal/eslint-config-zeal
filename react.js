// eslint-disable-next-line import/no-unused-modules
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsx-a11y", "react", "react-hooks"],
  rules: {
    // Enforce emojis are wrapped in and provide screenreader access.
    "jsx-a11y/accessible-emoji": "warn",
    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
    "jsx-a11y/alt-text": "warn",
    // Enforce all anchors to contain accessible content.
    "jsx-a11y/anchor-has-content": "warn",
    // Enforce all anchors are valid, navigable elements.
    "jsx-a11y/anchor-is-valid": "warn",
    // Enforce elements with aria-activedescendant are tabbable.
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    // Enforce all aria-* props are valid.
    "jsx-a11y/aria-props": "warn",
    // Enforce ARIA state and property values are valid.
    "jsx-a11y/aria-proptypes": "warn",
    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    "jsx-a11y/aria-role": "warn",
    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    "jsx-a11y/aria-unsupported-elements": "warn",
    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    "jsx-a11y/click-events-have-key-events": "warn",
    // Enforce that a control (an interactive element) has a text label.
    "jsx-a11y/control-has-associated-label": "warn",
    // Enforce heading (h1, h2, etc) elements contain accessible content.
    "jsx-a11y/heading-has-content": "warn",
    // Enforce <html> element has lang prop.
    "jsx-a11y/html-has-lang": "warn",
    // Enforce iframe elements have a title attribute.
    "jsx-a11y/iframe-has-title": "warn",
    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
    "jsx-a11y/img-redundant-alt": "warn",
    // Enforce that elements with interactive handlers like onClick must be focusable.
    "jsx-a11y/interactive-supports-focus": [
      "warn",
      {
        tabbable: [
          "button",
          "checkbox",
          "link",
          "searchbox",
          "spinbutton",
          "switch",
          "textbox",
        ],
      },
    ],
    // Enforce label tags have an associated control.
    "jsx-a11y/label-has-associated-control": "warn",
    // Enforce lang attribute has a valid value.
    "jsx-a11y/lang": "warn",
    // Enforces that <audio> and <video> elements must have a <track> for captions.
    "jsx-a11y/media-has-caption": "warn",
    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
    "jsx-a11y/mouse-events-have-key-events": "warn",
    // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
    "jsx-a11y/no-access-key": "warn",
    // Enforce autoFocus prop is not used.
    "jsx-a11y/no-autofocus": "warn",
    // Enforce distracting elements are not used.
    "jsx-a11y/no-distracting-elements": "warn",
    // Interactive elements should not be assigned non-interactive roles.
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "warn",
      {
        tr: ["none", "presentation"],
      },
    ],
    // Non-interactive elements should not be assigned mouse or keyboard event listeners.
    "jsx-a11y/no-noninteractive-element-interactions": [
      "warn",
      {
        body: ["onwarn", "onLoad"],
        handlers: [
          "onClick",
          "onwarn",
          "onLoad",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
        iframe: ["onwarn", "onLoad"],
        img: ["onwarn", "onLoad"],
      },
    ],
    // Non-interactive elements should not be assigned interactive roles.
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "warn",
      {
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        ol: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        table: ["grid"],
        td: ["gridcell"],
        ul: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
      },
    ],
    // tabIndex should only be declared on interactive elements.
    "jsx-a11y/no-noninteractive-tabindex": [
      "warn",
      {
        roles: ["tabpanel"],
        tags: [],
      },
    ],
    // Enforce usage of onBlur over onChange on select menus for accessibility.
    "jsx-a11y/no-onchange": "warn",
    // Enforce explicit role property is not the same as implicit/default role property on element.
    "jsx-a11y/no-redundant-roles": "warn",
    // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
    "jsx-a11y/no-static-element-interactions": [
      "warn",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    // Enforce that elements with ARIA roles must have all required attributes for that role.
    "jsx-a11y/role-has-required-aria-props": "warn",
    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
    "jsx-a11y/role-supports-aria-props": "warn",
    // Enforce scope prop is only used on <th> elements.
    "jsx-a11y/scope": "warn",
    // Enforce tabIndex value is not greater than zero.
    "jsx-a11y/tabindex-no-positive": "warn",
    // Enforces consistent naming for boolean props
    "react/boolean-prop-naming": "off",
    // Prevent usage of button elements without an explicit type attribute
    "react/button-has-type": "warn",
    //  Prevent extraneous defaultProps on components
    "react/default-props-match-prop-types": "off",
    // Enforce consistent usage of destructuring assignment of props, state,
    // and context
    "react/destructuring-assignment": "warn",
    // Prevent missing displayName in a React component definition
    "react/display-name": "warn",
    // Forbid certain props on Components
    "react/forbid-component-props": "off",
    // Forbid certain props on DOM Nodes
    "react/forbid-dom-props": "off",
    //  Forbid certain elements
    "react/forbid-elements": "off",
    // Forbid foreign propTypes
    "react/forbid-foreign-prop-types": "off",
    // Forbid certain propTypes
    "react/forbid-prop-types": [
      "warn",
      { checkChildContextTypes: true, checkContextTypes: true },
    ],
    // Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value": "warn",
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    "react/jsx-child-element-spacing": "warn",
    // Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location": ["warn", "after-props"],
    // Validate closing tag location in JSX
    "react/jsx-closing-tag-location": "warn",
    // Enforce curly braces or disallow unnecessary curly braces in JSX props
    // and/or children.
    "react/jsx-curly-brace-presence": ["warn", "never"],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    "react/jsx-curly-spacing": "warn",
    // Enforce or disallow spaces around equal signs in JSX attributes
    "react/jsx-equals-spacing": "warn",
    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension": "off",
    // Enforce position of the first prop in JSX
    "react/jsx-first-prop-new-line": "warn",
    // Enforce shorthand or standard form for React fragments
    "react/jsx-fragments": ["warn", "syntax"],
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": "warn",
    // Validate JSX indentation
    "react/jsx-indent": ["warn", 2],
    // Validate props indentation in JSX
    "react/jsx-indent-props": ["warn", 4],
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": "warn",
    // Validate JSX maximum depth
    "react/jsx-max-depth": "off",
    // Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line": "off",
    // Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": "off",
    // Prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes": "warn",
    // Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": "warn",
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": "off",
    // Prevent usage of unsafe target='_blank'
    "react/jsx-no-target-blank": "warn",
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": "warn",
    // One JSX Element Per Line
    "react/jsx-one-expression-per-line": ["warn", { allow: "literal" }],
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": "warn",
    // Disallow multiple spaces between inline JSX props
    "react/jsx-props-no-multi-spaces": "warn",
    // Disallow JSX props spreading
    "react/jsx-props-no-spreading": "off",
    // Enforce default props alphabetical sorting
    "react/jsx-sort-default-props": "off",
    // Enforce props alphabetical sorting
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        ignoreCase: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],

    // Validate whitespace in and around the JSX opening and closing brackets
    "react/jsx-tag-spacing": "warn",
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": "warn",
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": "warn",
    // Prevent missing parentheses around multilines JSX
    "react/jsx-wrap-multilines": "warn",
    // Prevent using this.state within a this.setState
    "react/no-access-state-in-setstate": "warn",
    //  Prevent using Array index in key props
    "react/no-array-index-key": "warn",
    // Prevent passing of children as props
    "react/no-children-prop": "warn",
    // Prevent usage of dangerous JSX properties
    "react/no-danger": "warn",
    // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children": "warn",
    // Prevent usage of deprecated methods
    "react/no-deprecated": "warn",
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": "warn",
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": "warn",
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": "warn",
    // Prevent usage of findDOMNode
    "react/no-find-dom-node": "warn",
    // Prevent usage of isMounted
    "react/no-is-mounted": "warn",
    // Prevent multiple component definition per file
    "react/no-multi-comp": ["warn", { ignoreStateless: true }],
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    "react/no-redundant-should-component-update": "warn",
    // Prevent usage of the return value of React.render
    "react/no-render-return-value": "warn",
    // Prevent usage of setState
    "react/no-set-state": "off",
    // Prevent using string references in ref attribute
    "react/no-string-refs": "warn",
    // Prevent using this in stateless functional components
    "react/no-this-in-sfc": "warn",
    // Prevents common typos
    "react/no-typos": "warn",
    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": "warn",
    // Prevent usage of unknown DOM property
    "react/no-unknown-property": "warn",
    // Prevent usage of UNSAFE_ methods
    "react/no-unsafe": "warn",
    // Prevent definitions of unused prop types
    "react/no-unused-prop-types": "warn",
    // Prevent definitions of unused state
    "react/no-unused-state": "warn",
    // Prevent usage of setState in componentWillUpdate
    "react/no-will-update-set-state": "warn",
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": "warn",
    // Enforce that props are read-only
    "react/prefer-read-only-props": "off",
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function": "warn",
    // Prevent missing props validation in a React component definition
    "react/prop-types": "off",
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": "warn",
    // Enforce a defaultProps definition for every prop that is not a required
    // prop
    "react/require-default-props": "off",
    // Enforce React components to have a shouldComponentUpdate method
    "react/require-optimization": "off",
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return": "warn",
    // Prevent extra closing tags for components without children
    "react/self-closing-comp": "warn",
    // Enforce component methods order
    "react/sort-comp": "warn",
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types": [
      "warn",
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    // Enforce state initialization style
    "react/state-in-constructor": ["warn", "never"],
    // Enforces where React component static properties should be positioned.
    "react/static-property-placement": "warn",
    // Enforce style prop value being an object
    "react/style-prop-object": "warn",
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    "react/void-dom-elements-no-children": "warn",
    // Verify the list of dependencies for Hooks like useEffect and similar
    "react-hooks/exhaustive-deps": "warn",
    // Enforce the rules of hooks
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
