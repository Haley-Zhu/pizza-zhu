import ToppingsSet from '../data/toppingsSet';

const topping = ( name, toppings = ToppingsSet ) => (
  toppings.find(topping => (topping.toppingName === name))
);

export default topping;