import React from 'react';
import './Size.css';
import sizeimg from '../../../assets/size.png';

const Size = ({ 
  sizestyle, 
  price
}) => (
  <div key={sizestyle} className={`size size--${sizestyle}`}>
    <img src={sizeimg} alt={sizestyle} />
    <div className="size__name">{sizestyle}
      <br />
      <span className="size__price">${price}</span>
    </div>
  </div>
)


export default Size;