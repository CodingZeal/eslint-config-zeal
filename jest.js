module.exports = {
  env: {
    jest: true
  },
  plugins: ["jest"],
  rules: {
    //
    // Overrides of base configuration
    //
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",
    // specify the maximum number of statement allowed in a function
    "max-statements": "off",

    //
    // Jest Rules
    //
    // Enforce consistent test or it keyword
    "jest/consistent-test-it": ["warn", { fn: "test", withinDescribe: "test" }],
    // Disallow capitalized test names
    "jest/lowercase-name": "warn",
    // Disallow disabled tests
    "jest/no-disabled-tests": "warn",
    // Disallow focused tests
    "jest/no-focused-tests": "warn",
    // Disallow setup and teardown hooks
    "jest/no-hooks": "off",
    // Disallow importing jest
    "jest/no-jest-import": "warn",
    // Disallow identical titles
    "jest/no-identical-title": "warn",
    // Disallow large snapshots
    "jest/no-large-snapshots": "warn",
    // Disallow using f & x prefixes to define focused/skipped tests
    "jest/no-test-prefixes": "off",
    // Suggest using expect.assertions() OR expect.hasAssertions()
    "jest/prefer-expect-assertions": "off",
    // Suggest using toHaveLength()
    "jest/prefer-to-have-length": "warn",
    // Suggest using toBeNull()
    "jest/prefer-to-be-null": "warn",
    // Suggest using toBeUndefined()
    "jest/prefer-to-be-undefined": "warn",
    // Enforce valid describe() callback
    "jest/valid-describe": "warn",
    // Ensure expect is called correctly
    "jest/valid-expect": "warn",
    // Enforce having return statement when testing with promises
    "jest/valid-expect-in-promise": "warn"
  }
};
