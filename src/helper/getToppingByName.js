import toppingSet from '../data/toppingsSet';

const topping = ( name ) => (
  toppingSet.find(topping => (topping.toppingName === name))
);

export default topping;