import defaults from './props/defaults';
import defaultStyles from './props/style/defaults';
import transforms from './props/style/transforms';
import shadow from './props/style/shadow';

const Image = {
  ...defaults,
  blurRadius: null,
  onLayout: null,
  onLoad: null,
  onLoadEnd: null,
  onLoadStart: null,
  resizeMode: null,
  source: null,
  onError: null,
  testID: null,
  resizeMethod: null,
  accessibilityLabel: null,
  accessible: null,
  capInsets: null,
  defaultSource: null,
  onPartialLoad: null,
  onProgress: null,
  style: {
    ...defaultStyles,
    ...transforms,
    ...shadow,
  }
};

export default Image;
