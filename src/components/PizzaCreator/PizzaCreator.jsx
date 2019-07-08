import React from 'react';
import Details from '../Details';
import SubmitButton from '../SubmitButton';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import './PizzaCreator.css';

const PizzaCreator = () => (
  <div className="pizza-creator">
    <Details />
    <Sizes />
    <Toppings />
    <div>Summary</div>
    <SubmitButton>Place Order</SubmitButton>
    <SubmitButton>Reset</SubmitButton>
  </div>
);

export default PizzaCreator;