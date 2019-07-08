import React from 'react';
import './SubmitButton.css';

// const SubmitButton = () =>(
//   <button type="submit">Place Order</button>
// )

const SubmitButton = (
  {children}
) => (
  <button type="submit">{children}</button>
)

export default SubmitButton;