import React from 'react';
import SubmitButton from '../SubmitButton';
import ResetButton from '../ResetButton';
import styled from 'styled-components';
// import './Buttons.css';

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
`;

const Buttons = ({ setSubmitClicked, setInitialStates }) => (
  // <div className="buttons">
    <ButtonsContainer>
      <ResetButton setInitialStates={setInitialStates}>Reset</ResetButton>
      <SubmitButton setSubmitClicked={setSubmitClicked}>Place Order</SubmitButton>
    </ButtonsContainer>
  // </div>
);
 
export default Buttons;