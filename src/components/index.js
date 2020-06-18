import React from 'react';
import * as ReactNative from 'react-native';
import createTouchable from './createTouchable';

const {TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} = ReactNative;

const exclusions = [
  'BackAndroid',
  'Navigator',
  'NavigatorIOS',
  'PushNotificationIOS',
  'TouchableOpacity',
  'TouchableHighlight',
  'TouchableWithoutFeedback',
];

const createElement = Element => props => <Element {...props} />;

const components = [
  ...Object.keys(ReactNative).filter(i => !exclusions.includes(i)).map(type => ({
    type,
    value: createElement(ReactNative[type])
  })),
  {
    type: 'TouchableOpacity',
    value: createTouchable(TouchableOpacity),
  },
  {
    type: 'TouchableHighlight',
    value: createTouchable(TouchableHighlight),
  },
  {
    type: 'TouchableWithoutFeedback',
    value: createTouchable(TouchableWithoutFeedback),
  },
];

export default components;
