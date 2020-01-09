import React from 'react';
// import './ErrorMessage.css';
import errorIcon from '../../../assets/error.png';
import styled from 'styled-components';

const ErrorMessageStyle = styled.div`
  position: fixed;
  left: calc(50% - 10rem);
  top: 5rem;
  padding: 0 1rem;
  width: 20rem;
  height: 8rem;
  box-sizing: border-box;
  background-color: #dbdbdb;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem 1rem;
  align-items: center;
  justify-items: center;

  > img {
    width: 2rem;
  }

  > button {
    grid-column: 1 /span 2;
    width: 6rem;
  }
`;

const ErrorMessage = (
  {children}
) => (
  <ErrorMessageStyle>
    <img src={errorIcon} alt="errorIcon"/>
    <span>{children}</span>
    {/* <button type="button">Comfirm</button> */}
  </ErrorMessageStyle>
);

export default ErrorMessage;