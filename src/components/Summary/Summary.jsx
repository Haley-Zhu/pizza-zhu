import React from 'react';
import Title from '../Title';
import SummaryToppingItem from '../SummaryToppingItem';
import './Summary.css';

const Summary = ({
  selectedPizza: {
    sizestyle,
    price,
  },
  selectedToppings,
  onMinusToppingAmount,
  onPlusToppingAmount,
  total
}) => (
  <section className="summary">
    <Title>Summary</Title>
    <ul>
      <li className="summary__itemsize">
        <span className="item__name">Pizza({sizestyle})</span>
        <span className="item__price">${price}</span>
      </li>
      {selectedToppings.map(selectedTopping => (
        <SummaryToppingItem 
        key={selectedTopping.toppingName} 
        selectedTopping={selectedTopping}
        onMinusToppingAmount={onMinusToppingAmount}
        onPlusToppingAmount={onPlusToppingAmount}
        />
      ))}
    </ul>
    <hr/>
    <div className="summary__total">
      <span>Total</span>
      <span className="item__price">${total}</span>
    </div>
  </section>
)

export default Summary;