// import ToppingsSet from '../data/toppingsSet';
import Repository from '../lib/Repository';

const toppingsSet = Repository.getToppingsSet();

const topping = ( name, toppings = toppingsSet ) => {
  debugger;
  return (toppings.find(topping => (topping.toppingName === name)));
};

export default topping;