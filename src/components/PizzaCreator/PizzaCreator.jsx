import React from 'react';
import Details from '../Details';
import SubmitButton from '../SubmitButton';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import './PizzaCreator.css';

class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedToppings: [],
    }

    this.onMinusToppingAmount = this.onMinusToppingAmount.bind(this);
    this.onPlusToppingAmount = this.onPlusToppingAmount.bind(this);
  }

  setSelectedToppings(selectedToppings) {
    this.setState({
      selectedToppings,
    })
  }

  onMinusToppingAmount(selectedToppingName, value = -1) {
    const { selectedToppings } = this.state;

    const selectedTopping = selectedToppings.find((selectedTopping) => (
      selectedTopping.toppingName === selectedToppingName));
      if (selectedTopping) {
        this.updateSelectedToppings(selectedToppingName, value);
      }
  }

  onPlusToppingAmount(selectedToppingName, value = 1) {
    this.updateSelectedToppings(selectedToppingName, value);
  }

  updateSelectedToppings(selectedToppingName, value) {
    const { selectedToppings } = this.state;

    const selectedTopping = selectedToppings.find((selectedTopping) => (
      selectedTopping.toppingName === selectedToppingName));

    if (selectedTopping) {
      const { toppingAmount } = selectedTopping;
      const newToppingAmount = toppingAmount + value;
      let newSelectedToppings = selectedToppings;

      if (newToppingAmount > 0) {
        newSelectedToppings = selectedToppings.map(selectedTopping => {
          if (selectedTopping.toppingName === selectedToppingName) {
            selectedTopping.toppingAmount = newToppingAmount;
          }

          return selectedTopping;
        });
      }
      else {
        newSelectedToppings = selectedToppings.filter(selectedTopping => (
          selectedTopping.toppingName !== selectedToppingName
        ));
      }

      this.setSelectedToppings(newSelectedToppings);
      return;
    }

    const selectedToppingAmount = value;

    const newSelectedToppings = [
      ...selectedToppings, {
        toppingName: selectedToppingName,
        toppingAmount: selectedToppingAmount,
      }];

    this.setSelectedToppings(newSelectedToppings);
    return;
  }

  render() {
    const { selectedToppings } = this.state;
    return (
      <div className="pizza-creator">
        <Details />
        <Sizes />
        <Toppings 
        selectedToppings={selectedToppings} 
        onMinusToppingAmount={this.onMinusToppingAmount}
        onPlusToppingAmount={this.onPlusToppingAmount}
        />
        <Summary selectedPizza={{ sizestyle: 'small', price: 9.9 }}
          selectToppings={[{ toppingName: 'anchovy', toppingPrice: 0.9 }]} />
        <SubmitButton>Place Order</SubmitButton>
        <SubmitButton>Reset</SubmitButton>
      </div>
    );
  }
}

export default PizzaCreator;