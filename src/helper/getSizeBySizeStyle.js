import SizesSet from '../data/SizesSet';

const size = (sizeStyle) => (
  SizesSet.find(size => (size.sizeStyle === sizeStyle))
);

export default size;