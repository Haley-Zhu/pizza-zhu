import React from 'react';
import Details from '../Details';
import SubmitButton from '../SubmitButton';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import './PizzaCreator.css';

class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pizza-creator">
        <Details />
        <Sizes />
        <Toppings />
        <Summary selectedPizza={{ sizestyle: 'small', price: 9.9 }}
          selectToppings={[{ toppingName: 'anchovy', toppingPrice: 0.9 }]} />
        <SubmitButton>Place Order</SubmitButton>
        <SubmitButton>Reset</SubmitButton>
      </div>
    );
  }
}

export default PizzaCreator;