import React from 'react';
import './ErrorMessage.css';
import errorIcon from '../../../assets/error.png';

const ErrorMessage = (
  {children}
) => (
  <div className="errorMeassage">
    <img src={errorIcon} alt="errorIcon"/>
    <span>{children}</span>
    {/* <button type="button">Comfirm</button> */}
  </div>
);

export default ErrorMessage;