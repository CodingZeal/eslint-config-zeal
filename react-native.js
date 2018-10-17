module.exports = {
  extends: ["plugin:import/react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react-native"],
  rules: {
    "react-native/no-color-literals": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-raw-text": "warn",
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn"
  }
};
