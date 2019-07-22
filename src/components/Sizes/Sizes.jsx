import React from 'react';
import Title from '../Title';
import Size from '../Size';
import SizesSet from '../../data/sizesSet';
import Repository from '../../lib/Repository';
import './Sizes.css';

class Sizes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizesSet: undefined,
    }

    this.setSizesSet = this.setSizesSet.bind(this);
  }

  setSizesSet(sizesSet) {
    this.setState ({
      sizesSet,
    })
  }

  componentDidMount() {
    Repository.getSizesSet().then(this.setSizesSet);
  }

  render() {
    const { selectedSize, onSelectPizzaSize } = this.props;
    const { sizesSet } = this.state;

    return (
      <section className="sizes">
        <Title>Select your sizes</Title>
        <div className="sizes-container">
          {sizesSet? sizesSet.map(size => {
            return (
              <Size
                key={size.sizeStyle}
                selectedSize={selectedSize}
                onSelectPizzaSize={onSelectPizzaSize}
                size={size}
              />)
          }) : (<div>Loading Sizes...</div>)}
        </div>
      </section>
    );
  }
}

export default Sizes;