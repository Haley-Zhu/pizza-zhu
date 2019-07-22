import React from 'react';
import './SummaryToppingItem.css';

class SummaryToppingItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedTopping, onMinusToppingAmount, onPlusToppingAmount } = this.props;
    const { toppingName, toppingAmount, toppingPrice } = selectedTopping;
    const toppingAdd = { toppingName, toppingAmount };

    return (
      <li className="summary__item">
        <span className="item__name">{toppingName}</span>
        <div className="item__amount">
          <button type="button" onClick={() => onMinusToppingAmount(toppingName)}>-</button>
          <span>{toppingAmount}</span>
          <button type="button" onClick={() => onPlusToppingAmount(toppingAdd)}>+</button>
        </div>
        <span className="item__price">${toppingPrice} * {toppingAmount}</span>
      </li>
    );
  }
}

export default SummaryToppingItem;