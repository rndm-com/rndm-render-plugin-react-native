import ReactNative from 'react-native';
import createTouchable from './createTouchable';

const { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } = ReactNative;

const exclusions = [
  'Navigator',
  'NavigatorIOS',
  'PushNotificationIOS',
  'TouchableOpacity',
  'TouchableHighlight',
  'TouchableWithoutFeedback',
];

const components = [
  ...Object.keys(ReactNative).filter(i => !exclusions.includes(i)).map(type => ({ type, value: ReactNative[type] })),
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
