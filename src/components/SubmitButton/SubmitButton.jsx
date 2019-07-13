import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({
  children,
  setSubmitClicked
}) => (
  <button type="submit" onClick={() => setSubmitClicked(true)}>{children}</button>
)

export default SubmitButton;