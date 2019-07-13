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
    const { toppingName, toppingImg, onMinusToppingAmount, onPlusToppingAmount } = this.props;

    return (
      <div className={this.getToppingClassName()}>
        <img src={toppingImg} alt={toppingName} />
        <span className="topping__name">{toppingName}</span>
        <div className="topping__amount">
          <button type="button" onClick={() => onMinusToppingAmount(toppingName)}>-</button>
          <span>{this.getAmount()}</span>
          <button type="button" onClick={() => onPlusToppingAmount(toppingName)}>+</button>
        </div>
      </div>
    );
  }
} 

export default Topping;