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
          toppingImg: anchovyImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'bacon',
          toppingImg: baconImg,
          toppingPrice: 0.9,
          
        }, {
          toppingName: 'basil',
          toppingImg: basilImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'chili',
          toppingImg: chiliImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'mozzarella',
          toppingImg: mozzarellaImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'mushroom',
          toppingImg: mushroomImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'olive',
          toppingImg: oliveImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'onion',
          toppingImg: onionImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'pepper',
          toppingImg: pepperImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'pepperoni',
          toppingImg: pepperoniImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'peppers',
          toppingImg: peppersImg,
          toppingPrice: 0.9,
        }, {
          toppingName: 'sweetcorn',
          toppingImg: sweetcornImg,
          toppingPrice: 0.9,
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