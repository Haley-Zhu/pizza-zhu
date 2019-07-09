import React from 'react';
import Title from '../Title';
import './Details.css';
import Input from '../Input';


const Details = () => (
  <section className="details">
    <Title>Enter your details</Title>
    <div className="details-container">
      {[{
        detailName: 'name',
      }, {
        detailName: 'email',
      }, {
        detailName: 'confirm_email',
      }, {
        detailName: 'address',
      }, {
        detailName: 'postcode',
      }, {
        detailName: 'contact_number',
      }].map(({ detailName }) => (
        <Input keyName={detailName} />
      ))}
    </div>
  </section>
)

export default Details;