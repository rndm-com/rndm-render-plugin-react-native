# RNDM Render Plugin: React Native

## About

This plugin provides the core functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

_**Please Note**: This plugin is also contained within the [Core Preset](https://github.com/rndm-com/rndm-render-preset-core) package, which also includes other functionality such as React Native components and lodash methods. If you are looking to get started, we highly recommend the [RNDM Client](https://github.com/rndm-com/rndm-client) which includes the standard [RNDM Render](https://github.com/rndm-com/rndm-render) and the core plugin._

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save-dev @rndm/render-plugin-react-native
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside yout main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-react-native';
```

## Usage

The React Native Plugin transforms the React Native components into serialisable objects.

**Example**

```javascript
const component = {
    type: 'react-native.View',
    props: {
        style: {
            width: 100,
            height: 100,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
        },
        children: {
            type: 'react-native.Text',
            props: {
                style: {
                    color: 'white',
                },
                children: "Hello World",
            },
        },
    },
};

const Element = () => render(component)

```

For the full suite of available React Native methods, [please checkout their awesome and powerful library](https://facebook.github.io/react-native/).

_(Note: This library is versioned alongside its corresponding Native Version version.)_
