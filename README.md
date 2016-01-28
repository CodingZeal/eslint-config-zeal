# eslint-config-zeal

[![Build Status](https://travis-ci.org/CodingZeal/eslint-config-zeal.svg?branch=master)](https://travis-ci.org/CodingZeal/eslint-config-zeal)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A [shareable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for Zeal's coding style.

Zeal's JavaScript coding style is still evolving as we do more projects, but this represents our current thinking.  After it stabilizes more, we'll release a version 1.0.

## Install

To make use of this configuration, install this package as a development dependency of your project:

```
npm install eslint-config-zeal --save-dev
```

## Usage

Add this to your `.eslintrc` file:

```
{
  "extends": "zeal"
}
```

*Note: ESLint assumes the `eslint-config-` prefix, so we can omit it.*

You can override settings from the configuration(s) by adding them directly to your `.eslintrc` file.

We have added some additional optional configurations that you can add on top of the base `zeal` config:

* `zeal/react`: Adds rules for [React](https://github.com/reactjs) development.  You'll need to install [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) to use this configuration.
* `zeal/mocha`: Overrides rules for use with [Mocha](https://mochajs.org/).  We recommend creating a separate `.eslintrc` file in the directory containing your tests and `extend`ing this config there.
* `zeal/chai`: Overrides rules for use with [Chai](http://chaijs.com/).  We recommend creating a separate `.eslintrc` file in the directory containing your tests and `extend`ing this config there.

You can extend multiple configurations using an array:

```
{
  "extends": ["zeal", "zeal/react"]
}
```

See the [ESLint configuration documentation](http://eslint.org/docs/user-guide/configuring) for more information on configuring ESLint.

## Supported Versions

This plugin contains all of the rules available in:

* [ESLint](http://eslint.org/): 1.10.3
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): 3.13.1

## License

Copyright (c) 2015 Zeal, LLC.  Licensed under the [MIT license](https://opensource.org/licenses/MIT).
