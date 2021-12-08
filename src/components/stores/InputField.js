import React from 'react';


class InputField extends React.Component {
  render() {
    return (
      <div className="inputField">
        <label>
          {this.props.label}
        </label>
        <input 
            className = 'input'
            // e-mail/username/password
            type = { this.props.type}
            //parsed from parent
            placeholder = {this.props.placeholder}
            //parsed from parent
            value = {this.props.value}
            //call back to parent function, access value from input thru e.target.value
            onChange = { (e) => this.props.onChange(e.target.value)}
            />
      </div>
    );
  }
}

export default InputField;