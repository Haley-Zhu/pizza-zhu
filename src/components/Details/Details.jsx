import React from 'react';
import Title from '../Title';
import Input from '../Input';
import DetailsSet from '../../data/detailsSet';
import styled from 'styled-components';
// import './Details.css';

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem 2rem;
`;


const Details = ({ 
  getSubmitClicked, 
  updateDetailsInputValue,
  detailsInput,
  updateDetailsInputFocus,
}) => (
    <section className="details">
      <Title>Enter your details</Title>
      <DetailsContainer>
        {DetailsSet.map(detail => {
          const detailInput = detailsInput.find(detailInput => (
            detailInput.hasOwnProperty(detail.detailId)));

          return (<Input
            key={detail.detailName}
            detail={detail}
            getSubmitClicked={getSubmitClicked}
            setInputValue={updateDetailsInputValue}
            detailInput={detailInput}
            setIsFocus={updateDetailsInputFocus}
          />)
        })}
      </DetailsContainer>
    </section>
  )

export default Details;