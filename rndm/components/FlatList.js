import ScrollView from './ScrollView';
import VirtualizedList from './VirtualizedList';

const style = {...ScrollView.style, ...VirtualizedList.style};
const FLatList = {
  ...ScrollView,
  ...VirtualizedList,
  stickyHeaderIndices: null,
  numColumns: null,
  style
};

export default FLatList;
