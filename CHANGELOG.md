# Change Log

All notable changes to this project will be documented in this file.  This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.9.0...HEAD)

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
