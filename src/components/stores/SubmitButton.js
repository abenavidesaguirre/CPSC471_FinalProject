import React from 'react';


class SubmitButton extends React.Component {
  render() {
    return (
      <div className="submitButton">
        <button
            className = 'btn'
            disabled = {this.props.disabled}
            onClick = { () => this.props.onClick() }
        >
            {/* pass in different buttons depending on what we want */}
            {this.props.text} 
        </button>
      </div>
    );
  }
}

export default SubmitButton;