import React from 'react';
import Title from '../Title';
import './Details.css';
import Input from '../Input';


const Details = () => (
  <section className="details">
    <Title>Enter your details</Title>
    <div className="details-container">
      {['name', 'email', 'confirm_email', 'address', 'postcode', 'contact_number'].map(v => (
        <Input keyName={v} />
      ))}
    </div>
  </section>
)

export default Details;