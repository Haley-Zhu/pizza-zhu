import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import toppingsSet from '../../data/toppingsSet';
import './Toppings.css';


const Toppings = ({
  selectedToppings,
  onMinusToppingAmount,
  onPlusToppingAmount,
}) => (
    <section className="toppings">
      <Title>Choose your toppings</Title>
      <div className="toppings-container">
        {toppingsSet.map(({ toppingName, toppingImg }) => {
          const selectedTopping = selectedToppings.find(selectedTopping => (
            selectedTopping.toppingName === toppingName));
            
          return (<Topping
            key={toppingName}
            toppingName={toppingName}
            toppingImg={toppingImg}
            selectedTopping={selectedTopping}
            onMinusToppingAmount={onMinusToppingAmount}
            onPlusToppingAmount={onPlusToppingAmount}
          />);
        })}
      </div>
    </section>
)

export default Toppings;