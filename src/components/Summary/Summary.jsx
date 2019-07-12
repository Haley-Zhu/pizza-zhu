import React from 'react';
import Title from '../Title';
import SummaryToppingItem from '../SummaryToppingItem';
import accMul from '../../helper/Math/accMul';
import accAdd from '../../helper/Math/accAdd';
import './Summary.css';

const Summary = ({
  selectedSize: {
    sizeStyle,
    price,
  },
  selectedToppings,
  onMinusToppingAmount,
  onPlusToppingAmount,
}) => {
  const sizePrice = price;

  const toppingPrice = selectedToppings.reduce((sum, selectedTopping) => {
    const { toppingAmount, toppingPrice } = selectedTopping;
    return accAdd(sum, accMul(toppingAmount, toppingPrice));
  }, 0);

  const totalPrice = accAdd(sizePrice, toppingPrice);

  return (
  <section className="summary">
    <Title>Summary</Title>
    <ul>
      <li className="summary__itemsize">
        <span className="item__name">Pizza({sizeStyle})</span>
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
      <span className="item__price">${totalPrice}</span>
    </div>
  </section>
)}

export default Summary;