import React from 'react';
import './Topping.css';

class Topping extends React.Component {
  constructor(props) {
    super(props);
  }

  getToppingClassName() {
    const amount = this.getAmount();
    const active = amount > 0;

    if (active) {
      return 'topping topping--active';
    }

    return 'topping';
  }

  getAmount() {
    let amount = 0; 

    if (this.props.selectedTopping) {
      const { selectedTopping } = this.props;

      amount = selectedTopping.toppingAmount;
    }

    return amount;
  }

  render() {
    const { toppingId, toppingName, toppingPrice, toppingImg, onMinusToppingAmount, onPlusToppingAmount } = this.props;
    const toppingAdd = { toppingName, toppingPrice, toppingId };

    return (
      <div data-testid="topping"
      className={this.getToppingClassName()}>
        <img data-testid="topping-img" src={toppingImg} alt={toppingName} />
        <span data-testid="topping-name" className="topping__name">{toppingName}</span>
        <div className="topping__amount">
          <button data-testid="topping-amountMinus" type="button" onClick={() => onMinusToppingAmount(toppingName)}>-</button>
          <span data-testid="topping-amount">{this.getAmount()}</span>
          <button data-testid="topping-amountPlus" type="button" onClick={() => onPlusToppingAmount(toppingAdd)}>+</button>
        </div>
      </div>
    );
  }
} 

export default Topping;