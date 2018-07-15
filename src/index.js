import ReactNative from 'react-native';
import { use } from 'rndm-render';

delete ReactNative.Navigator;
delete ReactNative.NavigatorIOS;
delete ReactNative.PushNotificationIOS;

const plugin = {
  key: 'ReactNative',
  components: Object.keys(ReactNative).map(type => ({ type, value: ReactNative[type] }))
};

use(plugin);

export default plugin;
