import FlatList from './FlatList';

const SectionList = {
  ...FlatList,
  sections: null
};
delete SectionList.data;

export default SectionList;
