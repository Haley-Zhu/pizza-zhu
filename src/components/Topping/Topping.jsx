import React from 'react';
import './Topping.css';

class Topping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    }
  }

  getToppingClassName() {
    const { active } = this.state;

    if (active) {
      return 'topping topping--active';
    }

    return 'topping';
  }

  getActiveState() {

  }
  
  toggleActive() {

    this.setState({
      active: !active,
    })
  }

  onToppingAmountMinus() {
    if(this.state.amount >= 1) {
      this.setState({
        amount: this.state.amount-1,
      })
    }
    // if amount = 0, do inactive
  }

  onToppingAmountPlus() {
    this.setState({
      amount: this.state.amount+1,
    })
    // if inactive, do active
    // else, do nothing
  }

  getAmount() {
    return this.state.amount;
  }

  render() {
    const { toppingName, toppingImg } = this.props;

    return (
      <div className={this.getToppingClassName()}>
        <img src={toppingImg} alt={toppingName} />
        <span className="topping__name">{toppingName}</span>
        <div className="topping__amount">
          <button onClick={() => this.onToppingAmountMinus()}>-</button>
          <span>{this.getAmount()}</span>
          <button onClick={() => this.onToppingAmountPlus()}>+</button>
        </div>
      </div>
    );
  }
} 

export default Topping;