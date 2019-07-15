import React from 'react';
import Title from '../Title';
import Input from '../Input';
import DetailsSet from '../../data/detailsSet';
import './Details.css';


const Details = ({ 
  getSubmitClicked, 
  updateDetailsInputValue,
  detailsInput,
  updateDetailsInputFocus,
}) => (
    <section className="details">
      <Title>Enter your details</Title>
      <div className="details-container">
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
      </div>
    </section>
  )

export default Details;