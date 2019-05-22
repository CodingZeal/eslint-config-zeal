// eslint-disable-next-line import/no-unused-modules
module.exports = {
  extends: ["plugin:import/react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-native"],
  rules: {
    // Detect StyleSheet rules and inline styles containing color literals instead of variables
    "react-native/no-color-literals": "warn",
    // Detect JSX components with inline styles that contain literal values
    "react-native/no-inline-styles": "warn",
    // Detect raw text outside of Text component
    "react-native/no-raw-text": "warn",
    // Detect StyleSheet rules which are not used in your React components
    "react-native/no-unused-styles": "warn",
    // Require style definitions to be sorted alphabetically
    "react-native/sort-styles": "warn",
    // Enforce using platform specific filenames when necessary
    "react-native/split-platform-components": "warn",
  },
};
