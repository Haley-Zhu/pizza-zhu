import React from 'react';
import './Topping.css';

const Topping = ({
  toppingName, 
  toppingImg
}) => (
  <div className="topping">
    <img src={toppingImg} alt={toppingName} />
    <span className="topping__name">{toppingName}</span>
    <div className="topping__amount">
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </div>
  </div>
)
export default Topping;