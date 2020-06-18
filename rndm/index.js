import * as components from './components';
import { createElement } from '@rndm/render';

const key = 'react-native';

const {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  Slider,
  KeyboardAvoidingView,
  TextInput,
  Switch,
  FLatList,
  SectionList,
  Modal,
  Picker,
  RefreshControl,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  WebView,
} = Object.keys(components)
  .reduce((o, i) => ({
    ...o,
    [i]: createElement({
      type: [key, i].join('.'), props: { ...components[i] } })
  }), {});

export {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Slider,
  KeyboardAvoidingView,
  TextInput,
  Switch,
  FLatList,
  SectionList,
  StatusBar,
  Modal,
  Picker,
  RefreshControl,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  WebView,
}
