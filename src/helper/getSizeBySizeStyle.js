import SizesSet from '../data/sizesSet';

const size = (sizeStyle) => (
  SizesSet.find(size => (size.sizeStyle === sizeStyle))
);

export default size;