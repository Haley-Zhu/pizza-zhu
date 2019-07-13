import React from 'react';
import Title from '../Title';
import Size from '../Size';
import SizesSet from '../../data/sizesSet';
import './Sizes.css';


const Sizes = ({
  selectedSize,
  onSelectPizzaSize,
}) => (
  <section className="sizes">
    <Title>Select your sizes</Title>
    <div className="sizes-container">
      {SizesSet.map(size => {
        return (
        <Size 
        key={size.sizeStyle} 
        selectedSize={selectedSize}
        onSelectPizzaSize={onSelectPizzaSize}
        size={size}
        />
      )})}
    </div>
  </section>
)

export default Sizes;