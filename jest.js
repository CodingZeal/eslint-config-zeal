module.exports = {
  env: {
    jest: true
  },
  plugins: ["jest"],
  rules: {
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",
    // specify the maximum number of statement allowed in a function
    "max-statements": "off",
    // disallow disabled tests
    "jest/no-disabled-tests": "warn",
    // disallow focused tests
    "jest/no-focused-tests": "warn",
    // disallow identical titles
    "jest/no-identical-title": "warn",
    // disallow large snapshots
    "jest/no-large-snapshots": "warn",
    // Suggest using toHaveLength()
    "jest/prefer-to-have-length": "warn",
    // Suggest using toBeNull()
    "jest/prefer-to-be-null": "warn",
    // Suggest using toBeUndefined()
    "jest/prefer-to-be-undefined": "warn",
    // ensure expect is called correctly
    "jest/valid-expect": "warn"
  }
};
