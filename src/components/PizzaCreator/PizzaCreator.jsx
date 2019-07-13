import React from 'react';
import Details from '../Details';
import Buttons from '../Buttons';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import getToppingByName from '../../helper/getToppingByName';
import getSizeBySizeStyle from '../../helper/getSizeBySizeStyle';
import initialPizzaCreatorState from '../../data/initialStates/InitialPizzaCreatorState';
import './PizzaCreator.css';

class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialPizzaCreatorState;

    this.onMinusToppingAmount = this.onMinusToppingAmount.bind(this);
    this.onPlusToppingAmount = this.onPlusToppingAmount.bind(this);
    this.onSelectPizzaSize = this.onSelectPizzaSize.bind(this);
    this.setSubmitClicked = this.setSubmitClicked.bind(this);
    this.getSubmitClicked = this.getSubmitClicked.bind(this);
    this.setInitialStates = this.setInitialStates.bind(this);
  }

  setInitialStates() {
    this.setState(initialPizzaCreatorState);
  }

  setSelectedToppings(selectedToppings) {
    this.setState({
      selectedToppings,
    })
  }

  setSelectedSize(selectedSize) {
    this.setState({
      selectedSize,
    })
  }

  setSubmitClicked(onSubmitClicked) {
    this.setState({
      onSubmitClicked,
    })
  }

  getSubmitClicked() {
    return this.state.onSubmitClicked;
  }

  onMinusToppingAmount(selectedToppingName, value = -1) {
    const { selectedToppings } = this.state;

    const selectedTopping = selectedToppings.find((selectedTopping) => (
      selectedTopping.toppingName === selectedToppingName));

      if (selectedTopping) {
        const { toppingAmount } = selectedTopping;
        const newToppingAmount = toppingAmount + value;

        if (newToppingAmount > 0) {
          this.updateSelectedToppings(selectedToppingName, value);
          return;
        }

        this.removeFromSelectedToppings(selectedToppingName);
      }
  }

  onPlusToppingAmount(selectedToppingName, value = 1) {
    const { selectedToppings } = this.state;

    const selectedTopping = selectedToppings.find((selectedTopping) => (
      selectedTopping.toppingName === selectedToppingName));

      if (selectedTopping) {
        this.updateSelectedToppings(selectedToppingName, value);
        return;
      }

      this.addToSelectedToppings(selectedToppingName, value);
  }

  removeFromSelectedToppings(selectedToppingName) {
    const { selectedToppings } = this.state;

    const newSelectedToppings = selectedToppings.filter(selectedTopping => (
      selectedTopping.toppingName !== selectedToppingName
    ));

    this.setSelectedToppings(newSelectedToppings);
  }

  addToSelectedToppings(selectedToppingName, value) {
    const { selectedToppings } = this.state;
    const selectedToppingAmount = value;

    const topping = getToppingByName(selectedToppingName);
    const { toppingPrice } = topping;

    const newSelectedToppings = [
      ...selectedToppings, {
        toppingName: selectedToppingName,
        toppingAmount: selectedToppingAmount,
        toppingPrice: toppingPrice,
      }];

    this.setSelectedToppings(newSelectedToppings);
  }

  updateSelectedToppings(selectedToppingName, value) {
    const { selectedToppings } = this.state;

    const newSelectedToppings = selectedToppings.map(selectedTopping => {
      if (selectedTopping.toppingName === selectedToppingName) {
        selectedTopping.toppingAmount = selectedTopping.toppingAmount + value;
      }

      return selectedTopping;
    });

    this.setSelectedToppings(newSelectedToppings);
  }

  onSelectPizzaSize(newSizeStyle) {
    const { selectedSize } = this.state;
    const { sizeStyle } = selectedSize;

    if (newSizeStyle === sizeStyle) {
      return;
    }

    const { price } = getSizeBySizeStyle(newSizeStyle);
    const newSelectedSize = {
      sizeStyle: newSizeStyle,
      price
    }

    this.setSelectedSize(newSelectedSize);
  }

  render() {
    const { selectedToppings, selectedSize } = this.state;

    return (
      // <form>
        <div className="pizza-creator">
          <Details getSubmitClicked={this.getSubmitClicked} />
          <Sizes
            selectedSize={selectedSize}
            onSelectPizzaSize={this.onSelectPizzaSize}
          />
          <Toppings
            selectedToppings={selectedToppings}
            onMinusToppingAmount={this.onMinusToppingAmount}
            onPlusToppingAmount={this.onPlusToppingAmount}
          />
          <Summary
            selectedSize={selectedSize}
            selectedToppings={selectedToppings}
            onMinusToppingAmount={this.onMinusToppingAmount}
            onPlusToppingAmount={this.onPlusToppingAmount}
          />
          <Buttons
            setSubmitClicked={this.setSubmitClicked}
            setInitialStates={this.setInitialStates}
          />
        </div>
      // </form>
    );
  }
}

export default PizzaCreator;