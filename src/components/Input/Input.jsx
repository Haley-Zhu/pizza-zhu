import React from 'react'
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  getIsError() {
    const { detailInput, detail } = this.props;
    const { detailId } = detail;
    const { isFocused } = detailInput;
    const value = detailInput[detailId];
    const isSubmit = this.props.getSubmitClicked();

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
    const { detail, detailInput, setInputValue, setIsFocus } = this.props;
    const { detailName, detailId, type, placeholder} = detail;
    const value = detailInput[detailId];

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
          onChange={(e) => setInputValue(detailId, e.target.value)}
          onFocus={() => setIsFocus(detailId)}
          />
      </div>
    );
  }
}

export default Input;