import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import ToppingsSet from '../../data/toppingsSet';
import Repository from '../../lib/Repository';
import './Toppings.css';

class Toppings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toppingsSet: undefined,
    };

    this.setToppingsSet = this.setToppingsSet.bind(this);
  }

  setToppingsSet(toppingsSet) {
    this.setState({
      toppingsSet,
    });
  }

  componentDidMount() {
    Repository.getToppingsSet().then(this.setToppingsSet);
  }

  render() {
    const { toppingsSet } = this.state;

    const { selectedToppings, onMinusToppingAmount, onPlusToppingAmount } = this.props;

    return (
      <section className="toppings">
        <Title>Choose your toppings</Title>
        <div className="toppings-container">
          {toppingsSet ? toppingsSet.map(({ id, toppingName, toppingPrice, toppingImg }) => {
            const selectedTopping = selectedToppings.find(selectedTopping => (
              selectedTopping.toppingName === toppingName));

            return (<Topping
              key={id}
              toppingId={id}
              toppingName={toppingName}
              toppingImg={toppingImg}
              toppingPrice={toppingPrice}
              selectedTopping={selectedTopping}
              onMinusToppingAmount={onMinusToppingAmount}
              onPlusToppingAmount={onPlusToppingAmount}
            />);
          }) : (<div>Loading...</div>)}
        </div>
      </section>
    );
  }
}

export default Toppings;