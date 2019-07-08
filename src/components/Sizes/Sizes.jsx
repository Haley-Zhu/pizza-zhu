import React from 'react';
import Title from '../Title';
import Size from '../Size';
import './Sizes.css';


const Sizes = () => (
  <section className="sizes">
    <Title>Select your sizes</Title>
    <div className="sizes-container">
      {[{
        sizestyle: 'small', 
        price: 9.9,
      }, {
        sizestyle: 'medium', 
        price: 10.9,
      }, {
        sizestyle: 'large', 
        price: 11.9,
      }].map(({sizestyle, price}) => (
        <Size key={sizestyle} sizestyle={sizestyle} price={price}/>
      ))}
    </div>
  </section>
)

export default Sizes;