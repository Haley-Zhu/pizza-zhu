import React from 'react';
import './SummaryToppingItem.css';

const SummaryToppingItem = (({ 
  toppingName, 
  toppingPrice 
}) => (
  <li className="summary__item" key={toppingName}>
    <span className="item__name">{toppingName}</span>
    <div className="item__amount">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
    <span className="item__price">${toppingPrice}</span>
  </li>
))

export default SummaryToppingItem;