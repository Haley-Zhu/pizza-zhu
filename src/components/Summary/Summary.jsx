import React from 'react';
import Title from '../Title';
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
        <li className="summary__item" key={toppingName}>
          <span className="item__name">{toppingName}</span>
          <div className="item__amount">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <span className="item__price">${toppingPrice}</span>
        </li>
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