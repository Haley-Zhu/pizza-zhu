import React from 'react';
import accMul from '../../helper/Math/accMul';
import './SummaryToppingItem.css';

class SummaryToppingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedTopping, onMinusToppingAmount, onPlusToppingAmount } = this.props;
    const { toppingName, toppingAmount, toppingPrice } = selectedTopping;
    const price = accMul(toppingPrice, toppingAmount);

    return (
      <li className="summary__item">
        <span className="item__name">{toppingName}</span>
        <div className="item__amount">
          <button onClick={() => onMinusToppingAmount(toppingName)}>-</button>
          <span>{toppingAmount}</span>
          <button onClick={() => onPlusToppingAmount(toppingName)}>+</button>
        </div>
        <span className="item__price">${price}</span>
      </li>
    );
  }
}

export default SummaryToppingItem;