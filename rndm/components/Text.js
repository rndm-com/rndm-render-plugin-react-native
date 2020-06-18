import View from './View';
import style from './props/style/text';

const Text = {
  ...View,
  selectable: null,
  accessible: null,
  ellipsizeMode: null,
  nativeID: null,
  numberOfLines: null,
  onLayout: null,
  onLongPress: null,
  onPress: null,
  pressRetentionOffset: null,
  allowFontScaling: null,
  testID: null,
  disabled: null,
  selectionColor: null,
  textBreakStrategy: null,
  adjustsFontSizeToFit: null,
  minimumFontScale: null,
  suppressHighlighting: null,
  style: {
    ...View.style,
    ...style,
  },
};

export default Text;
