import React from 'react';

class DigitalClicker extends React.Component {
  handleClick = (event) => {
    // event.preventDefault()
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }
  
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
        <button onClick={this.handleClick} id="digital-clicker">{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;