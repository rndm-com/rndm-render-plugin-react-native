import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import View from './View';

const TouchableHighlight = {
  ...TouchableWithoutFeedback,
  activeOpacity: null,
  onHideUnderlay: null,
  onShowUnderlay: null,
  style: View.style,
  underlayColor: null,
  hasTVPreferredFocus: null,
  tvParallaxProperties: null,
};

export default TouchableHighlight;
