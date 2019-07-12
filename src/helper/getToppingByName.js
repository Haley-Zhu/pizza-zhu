import ToppingsSet from '../data/ToppingsSet';

const topping = ( name, toppings = ToppingsSet ) => (
  toppings.find(topping => (topping.toppingName === name))
);

export default topping;