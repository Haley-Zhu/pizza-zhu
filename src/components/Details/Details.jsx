import React from 'react';
import Title from '../Title';
import Input from '../Input';
import DetailsSet from '../../data/detailsSet';
import './Details.css';


const Details = ({ getSubmitClicked }) => (
  <section className="details">
    <Title>Enter your details</Title>
    <div className="details-container">
      {DetailsSet.map(detail => (
        <Input 
        key={detail.detailName} 
        detail={detail}
        getSubmitClicked={getSubmitClicked}
        />
      ))}
    </div>
  </section>
)

export default Details;