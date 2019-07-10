import React from 'react';
import Title from '../Title';
import SummaryToppingItem from '../SummaryToppingItem';
import './Summary.css';

const Summary = ({
  selectedPizza: {
    sizestyle,
    price,
  },
  selectToppings,
  total
}) => (
  <section className="summary">
    <Title>Summary</Title>
    <ul>
      <li className="summary__itemsize">
        <span className="item__name">Pizza({sizestyle})</span>
        <span className="item__price">${price}</span>
      </li>
      {selectToppings.map(({ toppingName, toppingPrice }) => (
        <SummaryToppingItem key={toppingName} toppingName={toppingName} toppingPrice={toppingPrice} />
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