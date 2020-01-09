import React from 'react';
import Title from '../Title';
import Size from '../Size';
import SizesSet from '../../data/sizesSet';
import Repository from '../../lib/Repository';
import styled from 'styled-components';
// import './Sizes.css';

const SizesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  align-items: center;
`;

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
        <SizesContainer>
          {sizesSet? sizesSet.map(size => {
            return (
              <Size
                key={size.sizeStyle}
                selectedSize={selectedSize}
                onSelectPizzaSize={onSelectPizzaSize}
                size={size}
              />)
          }) : (<div>Loading Sizes...</div>)}
        </SizesContainer>
      </section>
    );
  }
}

export default Sizes;