import React from 'react';
import './ResetButton.css';

const ResetButton = ({
  children,
  setInitialStates
}) => (
  <button type="reset" onClick={() => setInitialStates()}>{children}</button>
)

export default ResetButton;