import React from 'react'
import './Input.css';

const Input = ({keyName}) => (
  <div className="detail" key={keyName}>
    <label htmlFor={keyName}>{keyName}</label>
    <span className="detail__message">Please input your {keyName}</span>
    <input type="text" id={keyName} />
  </div>
)

export default Input;