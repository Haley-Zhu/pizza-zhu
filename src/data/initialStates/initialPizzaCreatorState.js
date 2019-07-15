import initialSize from '../initialContent/initialSize';
import initialDetailsInput from '../initialContent/initailDetailsInput';

const initialPizzaCreatorState = {
  selectedToppings: [],
  selectedSize: {
    sizeStyle: initialSize.sizeStyle,
    price: initialSize.price,
  },
  detailsInput: initialDetailsInput,
  onSubmitClicked: false,
};

export default initialPizzaCreatorState;