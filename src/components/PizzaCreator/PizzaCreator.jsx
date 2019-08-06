import React from 'react';
import Details from '../Details';
import Buttons from '../Buttons';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import ErrorMessage from '../ErrorMessage';
import getToppingByName from '../../helper/getToppingByName';
import getSizeBySizeStyle from '../../helper/getSizeBySizeStyle';
import initialPizzaCreatorState from '../../data/initialStates/InitialPizzaCreatorState';
import Repository from '../../lib/Repository';
import './PizzaCreator.css';

import initialDetailsInput from '../../data/initialContent/initailDetailsInput';

class PizzaCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialPizzaCreatorState;
    // this.state = JSON.parse(JSON.stringify(initialPizzaCreatorState)); // 深拷贝OK，不会影响details的初始值
    // this.state = Object.assign(initialPizzaCreatorState); // 浅拷贝不行，detail初始值改变
    // this.state = (...initialPizzaCreatorState); // 也是浅拷贝
    // 由于details里面update的赋值出错了

    this.onMinusToppingAmount = this.onMinusToppingAmount.bind(this);
    this.onPlusToppingAmount = this.onPlusToppingAmount.bind(this);
    this.onSelectPizzaSize = this.onSelectPizzaSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getSubmitClicked = this.getSubmitClicked.bind(this);
    this.setInitialStates = this.setInitialStates.bind(this);
    this.updateDetailsInputValue = this.updateDetailsInputValue.bind(this);
    this.updateDetailsInputFocus = this.updateDetailsInputFocus.bind(this);
  }

  setInitialStates() {
    // 这个值被update了，why？其他值都没问题，是初始值
    // 由于details里面update的赋值出错了
    // console.log(initialPizzaCreatorState.detailsInput); 
    // console.log("---------------");
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

  setDetailsInput(detailsInput) {
    this.setState({
      detailsInput,
    }, () => console.log(initialPizzaCreatorState))
  }

  setSubmitClicked(onSubmitClicked) {
    this.setState({
      onSubmitClicked,
    })
  }

  onSubmit() {
    this.setSubmitClicked(true);

    const { selectedToppings, detailsInput, selectedSize} = this.state;

    console.log('detailsInput', detailsInput);
    console.table(selectedToppings);
    console.log('selectedSize', selectedSize);

    Repository.CreatOrder(selectedToppings, selectedSize.sizeStyle, detailsInput)
    .then(() => console.log('------Submitted'));
  }

  updateDetailsInputValue(detailId, inputValue) {
    const { detailsInput } = this.state;

    const newDetailsInput = detailsInput.map((detailInput) => {
      if (detailInput[detailId] !== undefined) {
        detailInput[detailId] = inputValue;
      }

      return detailInput;
    });

    this.setDetailsInput(newDetailsInput);

    // console.log(initialPizzaCreatorState.detailsInput); // 随着输入变化了
    // console.log('@@@@@@@@@@@@@@@@@')
    // console.log(this.state.detailsInput);
  }

  updateDetailsInputFocus(detailId,isFocused = true) {
    const { detailsInput } = this.state;

    const newDetailsInput = detailsInput.map((detailInput) => {
      // if (detailInput[detailId] !== undefined) {
      //   detailInput.isFocused = isFocused;
      // }
      // --------------以上的是直接reference赋值---------------------

      if (detailInput[detailId] === undefined) {
        return detailInput;
      }

      const newDetail = {
        ...detailInput,
        isFocused,
      };

      return newDetail;
    });

    this.setDetailsInput(newDetailsInput);
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

  onPlusToppingAmount(newSelectedTopping, value = 1) {
    const { selectedToppings } = this.state;

    const selectedTopping = selectedToppings.find((selectedTopping) => (
      selectedTopping.toppingName === newSelectedTopping.toppingName));

      if (selectedTopping) {
        this.updateSelectedToppings(newSelectedTopping.toppingName, value);
        return;
      }

      this.addToSelectedToppings(newSelectedTopping, value);
  }

  removeFromSelectedToppings(selectedToppingName) {
    const { selectedToppings } = this.state;

    const newSelectedToppings = selectedToppings.filter(selectedTopping => (
      selectedTopping.toppingName !== selectedToppingName
    ));

    this.setSelectedToppings(newSelectedToppings);
  }

  addToSelectedToppings(selectedTopping, value) {
    const { selectedToppings } = this.state;
    const selectedToppingAmount = value;

    // const topping = getToppingByName(selectedToppingName);
    // const { toppingPrice } = topping;

    const newSelectedToppings = [
      ...selectedToppings, {
        ...selectedTopping,
        toppingAmount: selectedToppingAmount,
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
    // console.log(initialPizzaCreatorState.selectedToppings); // 没有变，为[]，why？
    // console.log('!!!!!!!!!!!!!!!!!!1')
    // console.log(this.state.selectedToppings);
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
    // console.log(initialPizzaCreatorState.selectedSize); // 永远变，为Small()初始，why？
    // console.log('####################333')
    // console.log(this.state.selectedSize);// 显示选择前的值
  }

  isShowAtLeastOneToppingMessage() {
    // const { onSubmitClicked: isSubmited, selectedToppings } = this.state;
    const { selectedToppings, onSubmitClicked } = this.state;
    // console.log(onSubmitClicked, selectedToppings)
    if (onSubmitClicked && !selectedToppings.length) {
      return true;
    }

    return false;
  }

  // ErrorMessage show 3s then close，set isShowAtLeastOneToppingMessage to false

  render() {
    const { selectedToppings, selectedSize, detailsInput } = this.state;
    // console.log('$$$$$$$$$$$$$$$$$$$$4')
    // console.log(this.state.selectedSize); // 显示当前选择的值
    // console.log(this.isShowAtLeastOneToppingMessage());

    return (
        <div className="pizza-creator">
          <Details 
            updateDetailsInputValue={this.updateDetailsInputValue}
            getSubmitClicked={this.getSubmitClicked} 
            detailsInput={detailsInput}
            updateDetailsInputFocus={this.updateDetailsInputFocus}
          />
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
            setSubmitClicked={this.onSubmit}
            setInitialStates={this.setInitialStates}
          />
          {/* {this.isShowAtLeastOneToppingMessage() 
            && <ErrorMessage>Please choose at least ONE topping</ErrorMessage>} */}
        </div>
    );
  }
}

export default PizzaCreator;