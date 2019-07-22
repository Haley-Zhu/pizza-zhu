import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({
  children,
  setSubmitClicked
}) => (
  <button type="submit" onClick={() => setSubmitClicked()}>{children}</button>
)

export default SubmitButton;