# Change Log

All notable changes to this project will be documented in this file.  This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/CodingZeal/eslint-config-zeal/compare/v0.3.0...HEAD)

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
