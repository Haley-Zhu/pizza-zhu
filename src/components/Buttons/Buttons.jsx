import React from 'react';
import SubmitButton from '../SubmitButton';
import ResetButton from '../ResetButton';
import './Buttons.css';

const Buttons = ({ setSubmitClicked, setInitialStates }) => (
  <div className="buttons">
    <div className="buttons-container">
      <ResetButton setInitialStates={setInitialStates}>Reset</ResetButton>
      <SubmitButton setSubmitClicked={setSubmitClicked}>Place Order</SubmitButton>
    </div>
  </div>
);
 
export default Buttons;