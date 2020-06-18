import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import View from './View';

const TouchableOpacity = {
  ...TouchableWithoutFeedback,
  style: View.style,
  activeOpacity: null,
  tvParallaxProperties: null,
  hasTVPreferredFocus: null,
};

export default TouchableOpacity;
