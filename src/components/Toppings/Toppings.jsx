import React from 'react';
import Title from '../Title';
import Topping from '../Topping';
import anchovyImg from '../../../assets/toppings/anchovy.svg';
import baconImg from '../../../assets/toppings/bacon.svg';
import basilImg from '../../../assets/toppings/basil.svg';
import chiliImg from '../../../assets/toppings/chili.svg';
import mozzarellaImg from '../../../assets/toppings/mozzarella.svg';
import mushroomImg from '../../../assets/toppings/mushroom.svg';
import oliveImg from '../../../assets/toppings/olive.svg';
import onionImg from '../../../assets/toppings/onion.svg';
import pepperImg from '../../../assets/toppings/pepper.svg';
import pepperoniImg from '../../../assets/toppings/pepperoni.svg';
import peppersImg from '../../../assets/toppings/peppers.svg';
import sweetcornImg from '../../../assets/toppings/sweetcorn.svg';
import './Toppings.css';


const Toppings = ({
  selectedToppings,
  onMinusToppingAmount,
  onPlusToppingAmount,
}) => (
    <section className="toppings">
      <Title>Choose your toppings</Title>
      <div className="toppings-container">
        {[{
          toppingName: 'anchovy',
          toppingImg: anchovyImg
        }, {
          toppingName: 'bacon',
          toppingImg: baconImg
        }, {
          toppingName: 'basil',
          toppingImg: basilImg
        }, {
          toppingName: 'chili',
          toppingImg: chiliImg
        }, {
          toppingName: 'mozzarella',
          toppingImg: mozzarellaImg
        }, {
          toppingName: 'mushroom',
          toppingImg: mushroomImg
        }, {
          toppingName: 'olive',
          toppingImg: oliveImg
        }, {
          toppingName: 'onion',
          toppingImg: onionImg
        }, {
          toppingName: 'pepper',
          toppingImg: pepperImg
        }, {
          toppingName: 'pepperoni',
          toppingImg: pepperoniImg
        }, {
          toppingName: 'peppers',
          toppingImg: peppersImg
        }, {
          toppingName: 'sweetcorn',
          toppingImg: sweetcornImg
        }].map(({ toppingName, toppingImg }) => {
          const selectedTopping = selectedToppings.find(selectedTopping => (
            selectedTopping.toppingName === toppingName));
            
          return (<Topping
            key={toppingName}
            toppingName={toppingName}
            toppingImg={toppingImg}
            selectedTopping={selectedTopping}
            onMinusToppingAmount={onMinusToppingAmount}
            onPlusToppingAmount={onPlusToppingAmount}
          />);
        })}
      </div>
    </section>
)

export default Toppings;