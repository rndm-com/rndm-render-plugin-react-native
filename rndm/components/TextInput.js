import View from './View';
import text from './props/style/text';
import {omitBy} from 'lodash';

const style = {
  ...View.styles, ...omitBy(text, [
    'borderLeftWidth',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius'])
};
const TextInput = {
  ...View,
  placeholderTextColor: null,
  allowFontScaling: null,
  autoCorrect: null,
  autoFocus: null,
  blurOnSubmit: null,
  caretHidden: null,
  defaultValue: null,
  editable: null,
  keyboardType: null,
  maxHeight: null,
  maxLength: null,
  multiline: null,
  onBlur: null,
  onChange: null,
  onChangeText: null,
  onContentSizeChange: null,
  onEndEditing: null,
  onFocus: null,
  onLayout: null,
  onScroll: null,
  onSelectionChange: null,
  onSubmitEditing: null,
  placeholder: null,
  autoCapitalize: null,
  returnKeyType: null,
  secureTextEntry: null,
  selectTextOnFocus: null,
  selection: null,
  selectionColor: null,
  style,
  value: null,
  autoGrow: null,
  disableFullscreenUI: null,
  inlineImageLeft: null,
  inlineImagePadding: null,
  numberOfLines: null,
  returnKeyLabel: null,
  textBreakStrategy: null,
  underlineColorAndroid: null,
  clearButtonMode: null,
  clearTextOnFocus: null,
  dataDetectorTypes: null,
  enablesReturnKeyAutomatically: null,
  keyboardAppearance: null,
  onKeyPress: null,
  selectionState: null,
  spellCheck: null,
};

export default TextInput;
