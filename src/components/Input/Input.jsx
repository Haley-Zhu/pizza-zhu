import React from 'react'
import initialInputState from '../../data/initialStates/InitialInputState';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialInputState;
  }

  setInitialStates() {
    this.setState(initialInputState);
  }

  setInputValue (value) {
    this.setState({
      value,
    })
  }

  setIsFocus (isFocused = true) {
    this.setState({
      isFocused,
    })
  }

  getIsError() {
    const { isFocused, value } = this.state;
    const isSubmit = this.props.getSubmitClicked();

    // debugger;

    if ((isFocused || isSubmit) && !value) {
      return true;
    }
    return false;
  }

  getDetailClassName() {
    const isShowError = this.getIsError();

    if (isShowError) {
      return "detail detail--error";
    }
    return "detail";
  }

  getIsShowErrorMessage() {
    const isShowError = this.getIsError();

    if (isShowError) {
      return {display: "block"};
    }
    return {display: "none"};
  }


  render() {
    const { detail } = this.props;
    const { detailName, detailId, type, placeholder} = detail;
    const { value } = this.state;

    return (
      <div className={this.getDetailClassName()}>
        <label htmlFor={detailId}>{detailName}</label>
        <span 
          style={this.getIsShowErrorMessage()} 
          className="detail__message">Please input your {detailName}
        </span>
        <input
          type={type}
          id={detailId}
          name={detailId}
          placeholder={placeholder}
          value={value}
          onChange={(e) => this.setInputValue(e.target.value)}
          onFocus={() => this.setIsFocus()}
          />
      </div>
    );
  }
}

export default Input;