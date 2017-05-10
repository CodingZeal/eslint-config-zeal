# Change Log

All notable changes to this project will be documented in this file.  This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.20.2...HEAD)

## [0.20.2](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.20.1...v0.20.2) - 2017-05-10

### Changed

* Update to eslint-plugin-jest 20.0.0. ([#60](https://github.com/CodingZeal/eslint-config-zeal/pull/60))

### Fixed

* Resolve `Definition for rule 'jest/valid-expect' was not found` error.  That rule was added in eslint-plugin-jest 20.0.0, but we added a definition for it in v0.20.0.  We now depend on the correct version of eslint-plugin-jest, so the error no longer occurs. ([#60](https://github.com/CodingZeal/eslint-config-zeal/pull/60))

## [0.20.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.20.0...v0.20.1) - 2017-05-05

### Changed

* Update to ESLint 3.19.0. ([#56](https://github.com/CodingZeal/eslint-config-zeal/pull/56))

* Update to eslint-plugin-react 6.10.3. ([#56](https://github.com/CodingZeal/eslint-config-zeal/pull/56))

* Update to eslint-plugin-react-native 2.3.2. ([#56](https://github.com/CodingZeal/eslint-config-zeal/pull/56))

* Update to use babel-eslint 7.2.3. ([#56](https://github.com/CodingZeal/eslint-config-zeal/pull/56))

## [0.20.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.19.0...v0.20.0) - 2017-03-17

### Changed

* Update to ESLint 3.17.1. ([#53](https://github.com/CodingZeal/eslint-config-zeal/pull/53))

* Update to eslint-plugin-react-native 2.3.1. ([#53](https://github.com/CodingZeal/eslint-config-zeal/pull/53))

* Update to eslint-plugin-jest 19.0.1. ([#53](https://github.com/CodingZeal/eslint-config-zeal/pull/53))

* Adjust for renamed rule: `jest/no-exclusive-tests` is now `jest/no-focused-tests`. ([#53](https://github.com/CodingZeal/eslint-config-zeal/pull/53))

### Added

* Enables warnings for new rules: `no-compare-neg-zero`, `nonblock-statement-body-position`, `jest/no-disabled-tests`, and `jest/valid-expect`. ([#53](https://github.com/CodingZeal/eslint-config-zeal/pull/53))

## [0.19.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.18.0...v0.19.0) - 2017-02-17

### Changed

* Update to ESLint 3.15.0. ([#50](https://github.com/CodingZeal/eslint-config-zeal/pull/50))

* Update to eslint-plugin-react 6.10.0. ([#52](https://github.com/CodingZeal/eslint-config-zeal/pull/52))

### Added

* Enables warnings for new rules: `template-tag-spacing` and `react/void-dom-elements-no-children`. ([#50](https://github.com/CodingZeal/eslint-config-zeal/pull/50), [#52](https://github.com/CodingZeal/eslint-config-zeal/pull/52))

* Adds support for new rules, but leaves them disabled: `react/forbid-elements` and `react/forbid-foreign-prop-types`. ([#52](https://github.com/CodingZeal/eslint-config-zeal/pull/52))

## [0.18.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.17.0...v0.18.0) - 2017-01-27

### Changed

* Update to ESLint 3.14.1. ([#49](https://github.com/CodingZeal/eslint-config-zeal/pull/49))

### Added

* Adds support for new rule, but leaves them disabled: `prefer-promise-reject-errors` and `no-multi-assign`. ([#49](https://github.com/CodingZeal/eslint-config-zeal/pull/49))

## [0.17.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.16.0...v0.17.0) - 2017-01-23

### Changed

* Update rule configuration to match our (Zeal's) current practice ([#48](
  https://github.com/CodingZeal/eslint-config-zeal/pull/48)):

  - `complexity`: Change maximum allowed complexity from 2 to 3.  We knew 2 was probably too low when we started, but we didn’t know how big to make it.  After some experience, we now think 3 is pretty good for most of our projects.  We’ll use comments to bump the level up on a case-by-case basis where needed.  We rarely write code that needs more than 4.

  - `no-invalid-this`: This rule doesn’t yet properly support class property syntax, so we disable it in almost all of our projects.

  - `no-unused-expressions`: We often relax this rule to allow short-circuiting (`someCondition && someAction()`) or ternary expressions (`return someCondition ? someAction() : null`).

  - `no-unused-vars`: Add an `argsIgnorePattern` to allow us to use `_unusedVar` when we want to explicitly name an unused function argument.  This is made possible by the change to `no-underscore-dangle`.

  - `no-underscore-dangle`: There are cases, such as when working with third-party software, that underscores are required, so we now disable this rule.  We still write code without underscored names, except in the case of explicitly ignored function arguments described above.

  - `import/no-named-as-default`: Sometimes we want to provide a name for a default export so that the code is more “greppable”.

  - `import/no-named-as-default-member`: We now disable this rule because it blocks the ability to export localized Redux selectors by name and globalized Redux selectors as the default export as described in [this blog post](http://randycoulman.com/blog/2016/09/27/modular-reducers-and-selectors/).

  - `import/extensions`: We now require extensions for `scss` files to work properly with our create-react-app based boilerplate, [generator-react-zeal](https://github.com/CodingZeal/generator-react-zeal).

  - `import/prefer-default-export`: We now disable this rule.  Often, we’ll create a file that will eventually have multiple named exports, but for now does not.  We now prefer the flexibility to choose between default and named exports on a case-by-case basis.

  - `react/no-set-state`: We now disable this rule.  While we still use Redux for most of our state management, there are cases when it makes more sense for a React component to maintain its own state.

* Update to ESLint 3.13.1 ([#46](https://github.com/CodingZeal/eslint-config-zeal/pull/46))

## [0.16.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.15.0...v0.16.0) - 2017-01-09

### Changed

* Modify published package to include only necessary files. ([#41](https://github.com/CodingZeal/eslint-config-zeal/pull/41))

* Update to ESLint 3.13.0 and eslint-plugin-react 6.9.0 ([#45](https://github.com/CodingZeal/eslint-config-zeal/pull/45))

### Added

* Adds a configuration for [Jest](http://facebook.github.io/jest/), including the use of [eslint-plugin-jest](https://github.com/jkimbo/eslint-plugin-jest).  ([#42](https://github.com/CodingZeal/eslint-config-zeal/pull/42))

* Enables warning for new rule: `prefer-destructuring` ([#45](https://github.com/CodingZeal/eslint-config-zeal/pull/45))

## [0.15.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.14.1...v0.15.0) - 2016-12-16

### Changed

* Update to ESLint 3.12.2, eslint-plugin-react 6.8.0, and eslint-plugin-react-native 2.2.1. ([#39](https://github.com/CodingZeal/eslint-config-zeal/pull/39))

### Added

* Enables warnings for new rules: `no-await-in-loop` and `react/no-array-index-key`. ([#39](https://github.com/CodingZeal/eslint-config-zeal/pull/39))

* Adds support for new rule, but leaves it disabled: `react/require-default-props`. ([#39](https://github.com/CodingZeal/eslint-config-zeal/pull/39))

## [0.14.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.14.0...v0.14.1) - 2016-12-02

### Fixed

* Fixed peer dependency on babel-eslint.  Now 7.1.1.

## [0.14.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.13.0...v0.14.0) - 2016-12-02

### Changed

* Update to ESLint 3.11.1, eslint-plugin-react 6.7.1, eslint-plugin-react-native 2.2.0, and babel-eslint 7.1.1. ([#38](https://github.com/CodingZeal/eslint-config-zeal/pull/38))

* Configure several rules as errors instead of warnings.  These rules are ones that have a high probability of causing programs to fail, so getting fast feedback about these issues is important.  Rules that are now errors: `no-dupe-args`, `no-dupe-keys`, `no-duplicate-case`, `no-redeclare`, `no-undef`, `import/no-unresolved`, and `import/named`. ([#37](https://github.com/CodingZeal/eslint-config-zeal/pull/37))

### Added

* Enables warnings for new rules: `require-await`, `react/jsx-tag-spacing`, `func-name-matching`, and `import/no-named-default`. ([#38](https://github.com/CodingZeal/eslint-config-zeal/pull/38))

* Adds support for new rule, but leaves it disabled: `capitalized-comments`. ([#38](https://github.com/CodingZeal/eslint-config-zeal/pull/38))

## [0.13.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.12.1...v0.13.0) - 2016-11-14

### Changed

* Update to ESLint 3.10.0, eslint-plugin-import 2.2.0, eslint-plugin-react 6.6.0, and babel-eslint 7.1.0. ([#36](https://github.com/CodingZeal/eslint-config-zeal/pull/36))

### Added

* Enables warnings for new rules: `no-return-await`, `no-useless-return`, `func-name-matching`, and `import/no-named-default`. ([#36](https://github.com/CodingZeal/eslint-config-zeal/pull/36))

## [0.12.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.12.0...v0.12.1) - 2016-10-03

### Changed

* Update to eslint-plugin-react 6.4.0. ([#34](https://github.com/CodingZeal/eslint-config-zeal/pull/34))

## [0.12.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.11.0...v0.12.0) - 2016-10-03

### Changed

* Update to ESLint 3.7.0, eslint-plugin-import 2.0.0, and babel-eslint 7.0.0. ([#33](https://github.com/CodingZeal/eslint-config-zeal/pull/33))

* Change `ecmaVersion` setting to `2017` to get support for ES2017 features like `async`/`await`. ([#33](https://github.com/CodingZeal/eslint-config-zeal/pull/33))

* Rename `import/import-first` to `import/first`. ([#33](https://github.com/CodingZeal/eslint-config-zeal/pull/33))

### Added

* Enables warnings for new rules: `import/no-dynamic-require` and `import/no-webpack-loader-syntax`. ([#33](https://github.com/CodingZeal/eslint-config-zeal/pull/33))

* Adds support for new rules, but leaves them disabled: `import/no-internal-modules`, `import/unambiguous`, and `import/no-unassigned-import`. ([#33](https://github.com/CodingZeal/eslint-config-zeal/pull/33))

## [0.11.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.10.0...v0.11.0) - 2016-09-20

### Changed

* Update to ESLint 3.5.0, eslint-plugin-react 6.3.0, and eslint-plugin-import 1.15.0. ([#30](https://github.com/CodingZeal/eslint-config-zeal/pull/30))

### Added

* Enables warnings for new rules: `lines-around-directive`, `prefer-numeric-literals`, `symbol-description`, `import/no-absolute-path`, `react/no-children-prop`, `react/no-unescaped-entities`, `react/no-unused-prop-types`, and `react/style-prop-object`. ([#30](https://github.com/CodingZeal/eslint-config-zeal/pull/30))

* Adds support for new rules, but leaves them disabled: `class-methods-use-this`, `line-comment-position`, `no-restricted-properties`, and `import/max-dependencies`. ([#30](https://github.com/CodingZeal/eslint-config-zeal/pull/30))

## [0.10.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.9.0...v0.10.0) - 2016-08-17

### Changed

* Update to eslint-plugin-react 6.1.2. ([#28](https://github.com/CodingZeal/eslint-config-zeal/pull/28))

* Enable a warning for the `react/no-danger-with-children` rule.  This rule was disabled when it was first added due to an issue in eslint-plugin-react 6.1.1.  Version 6.1.2 fixes the issue, so the rule is now enabled as a warning. ([#28](https://github.com/CodingZeal/eslint-config-zeal/pull/28))

## [0.9.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.8.1...v0.9.0) - 2016-08-16

### Added

* Enables warnings for new rules: `no-template-curly-in-string`, `no-tabs`,  `react/no-danger-with-children` (temporarily disabled; see [#26](https://github.com/CodingZeal/eslint-config-zeal/issues/26)), and `react/no-find-dom-node`. ([#23](https://github.com/CodingZeal/eslint-config-zeal/pull/23))

* Adds support for new rules, but leaves them disabled: `multiline-ternary`, `sort-keys`,  `react/forbid-component-props`, and `import/no-restricted-paths`. ([#23](https://github.com/CodingZeal/eslint-config-zeal/pull/23))

* Adds support for react-native ([#25](https://github.com/CodingZeal/eslint-config-zeal/pull/25), [#27](https://github.com/CodingZeal/eslint-config-zeal/pull/27))

### Changed

* Update to ESLint 3.3.1, eslint-plugin-react 6.1.1, and eslint-plugin-import 1.13.0. ([#23](https://github.com/CodingZeal/eslint-config-zeal/pull/23))

* Replace deprecated rules with their replacements: ([#23](https://github.com/CodingZeal/eslint-config-zeal/pull/23))
  * `no-negated-in-lhs` => `no-unsafe-negation`
  * `no-native-reassign` => `no-global-assign`
  * `no-spaced-func` => `func-call-spacing`
  * `react/wrap-multilines` => `react/jsx-wrap-multilines`
  * `react/no-comment-textnodes` =>  `react/jsx-no-comment-textnodes`
  * `react/no-comment-textnodes` => `react/jsx-no-comment-textnodes`

### Removed

* Removed configuration for deprecated rule `react/require-extension`. ([#23](https://github.com/CodingZeal/eslint-config-zeal/pull/23))

## [0.8.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.8.0...v0.8.1) - 2016-07-19

### Changed

* Mark `expect` as a global when using Chai.  Some test runner configurations (such as with Karma) make `expect` available globally.  By marking `expect` as a global, we don't get warnings from the `no-undef` rule. ([#21](https://github.com/CodingZeal/eslint-config-zeal/pull/21))

* Don't report `no-mixed-operators` warnings for arithmetic expressions, while continuing to report them for logical, comparison, and bit-wise expressions.  Most people understand the standard precedence of arithmetic operators and those expressions are more readable without the extra parentheses. ([#20](https://github.com/CodingZeal/eslint-config-zeal/pull/20))

## [0.8.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.7.0...v0.8.0) - 2016-06-20

### Added

* Enables warnings for new rules: `no-prototype-builtins`, `no-mixed-operators`, `unicode-bom`, `no-useless-rename`, `rest-spread-spacing`, `react/no-comment-textnodes`, and `react/no-render-return-value`. ([#18](https://github.com/CodingZeal/eslint-config-zeal/pull/18))

* Adds support for new rules, but leaves them disabled: `max-lines`, `object-curly-newline`, `react/jsx-filename-extension`, and `react/require-optimization`. ([#18](https://github.com/CodingZeal/eslint-config-zeal/pull/18))

### Changed

* Update to ESLint 2.13.1 and eslint-plugin-react 5.2.2. ([#18](https://github.com/CodingZeal/eslint-config-zeal/pull/18))

## [0.7.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.6.2...v0.7.0) - 2016-05-27

### Added

* Enables warnings for new rules: `no-unsafe-finally`, `no-useless-escape`, `no-duplicate-imports`, `no-useless-computed-key`, `import/no-named-as-default-member`, `import-no-deprecated`, `import/no-extraneous-dependencies`, `import/no-mutable-exports`, `import/no-duplicates`, `import/extensions`, `import/newline-after-import`, and `import/prefer-default-export`. ([#17](https://github.com/CodingZeal/eslint-config-zeal/pull/17))

* Adds support for new rules, but leaves them disabled: `max-statements-per-line`, `object-property-newline`, `import/no-nodejs-modules`, `import/no-namespace`, and `import/order`. ([#17](https://github.com/CodingZeal/eslint-config-zeal/pull/17))

### Changed

* Disable the `react/prop-types` rule.  While propTypes provide handy documentation, we felt that the maintenance cost of keeping them around was too high, so we've disabled the rule by default. ([#16](https://github.com/CodingZeal/eslint-config-zeal/pull/16))

* Update to ESLint 2.10.2, eslint-plugin-import 1.8.0, and eslint-plugin-react 5.1.1. ([#17](https://github.com/CodingZeal/eslint-config-zeal/pull/17))

## [0.6.2](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.6.1...v0.6.2) - 2016-05-16

### Changed

* Disable the `max-statements` rule in Mocha specs ([#15](https://github.com/CodingZeal/eslint-config-zeal/pull/15))

## [0.6.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.6.0...v0.6.1) - 2016-03-21

### Added

* Configure eslint-plugin-import to ignore image files ([#12](https://github.com/CodingZeal/eslint-config-zeal/pull/12))

## [0.6.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.5.1...v0.6.0) - 2016-03-18

### Added

* Add support for new `template-curly-spacing`, `newline-before-return`, `no-restricted-globals`, and `react/prefer-stateless-function` rules. ([#11](https://github.com/CodingZeal/eslint-config-zeal/pull/11))

### Changed

* Update to ESLint 2.4.0, eslint-plugin-import 1.1.0, and eslint-plugin-react 4.2.3. Requires babel-eslint 6.0.0-beta.6 or later. ([#11](https://github.com/CodingZeal/eslint-config-zeal/pull/11))

## [0.5.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.5.0...v0.5.1) - 2016-03-01

### Fixed

* The configuration options for the `react/display-name` rule changed in eslint-plugin-react 4.0.  `react.js` has been updated to adapt to the new options. ([#10](https://github.com/CodingZeal/eslint-config-zeal/pull/10))

## [0.5.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.4.0...v0.5.0) - 2016-03-01

### Changed

* Update [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) support to v4.1.0. If you need to continue to use version 3.x of that plugin, please keep using v0.4.0 instead of upgrading. ([#9](https://github.com/CodingZeal/eslint-config-zeal/pull/9))

## [0.4.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.3.1...v0.4.0) - 2016-02-19

### Added

* Add [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) to check ES6 imports and exports. ([#7](https://github.com/CodingZeal/eslint-config-zeal/pull/7))

### Changed

* Disable the [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call) rule. It fires too frequently, especially when using Chai expectations.  Given that we have a pretty short line-length limit (80 chars), that tends to limit the length of chained calls already. ([#8](https://github.com/CodingZeal/eslint-config-zeal/pull/8))

## [0.3.1](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.3.0...v0.3.1) - 2016-02-12

### Removed

* Temporarily remove the `react/jsx-space-before-closing` rule.  It hasn't been released in eslint-plugin-react yet. ([#6](https://github.com/CodingZeal/eslint-config-zeal/pull/6))

## [0.3.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.2.0...v0.3.0) - 2016-02-12

This release is updated for ESLint 2.0, which has some backwards-incompatible changes in it.  If you need to continue using ESLint 1.x, please keep using version 0.2.0 instead of upgrading.

### Changed

* Modify configuration to match changes in ESLint 2.0
* Update rules to match those in ESLint 2.0
* Update rules to match those in eslint-plugin-react 3.16.1

## [0.2.0](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.1.0...v0.2.0) - 2016-01-28

### Changed

* Mark eslint and babel-eslint as `peerDependencies` and `devDependencies` instead of `dependencies`. ([#2](https://github.com/CodingZeal/eslint-config-zeal/pull/2))

## 0.1.0 - 2016-01-28

### Added
* Shareable ESLint configuration representing Zeal's JavaScript coding standards
* Additional configuration module for React development (requires [esling-plugin-react](https://github.com/yannickcr/eslint-plugin-react))
* Additional configuration module for MochaJS tests
* Additional configuration module for Chai expectations
