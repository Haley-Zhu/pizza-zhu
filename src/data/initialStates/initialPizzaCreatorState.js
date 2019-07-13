import initialSize from '../initialContent/InitialSize';

const initialPizzaCreatorState = {
  selectedToppings: [],
  selectedSize: {
    sizeStyle: initialSize.sizeStyle,
    price: initialSize.price,
  },
  onSubmitClicked: false,
};

export default initialPizzaCreatorState;