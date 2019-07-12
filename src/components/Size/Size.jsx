import React from 'react';
import './Size.css';

class Size extends React.Component {
  constructor(props) {
    super(props);
  }

  getSizeClassName() {
    const { selectedSize, size } = this.props;
    const { sizeStyle } = size;

    if (selectedSize.sizeStyle === sizeStyle) {
      return `size size--select size--${sizeStyle}`;
    }

    return `size size--${sizeStyle}`;
  }

  render() {
    const { size, onSelectPizzaSize } = this.props;
    const { sizeStyle, srcImg, price} = size;

    return (
      <div
        className={this.getSizeClassName()}
        onClick={() => onSelectPizzaSize(sizeStyle)}
      >
        <img src={srcImg} alt={sizeStyle} />
        <div className="size__name">{sizeStyle}
          <br />
          <span className="size__price">${price}</span>
        </div>
      </div>
    );
  }
}

export default Size;