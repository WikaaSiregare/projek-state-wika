import React from 'react';

class ButtonClickHandler extends React.Component {
  handleClick() {
    alert('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default ButtonClickHandler;
