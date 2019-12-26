import React from "react";
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialCount,
    };
  }

  handleAddCount = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  handleSubtractCount = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  handleResetToZero = () => {
    this.setState({count: 0});
  };

  render() {
    return (
      <div className="main">
        <div className="countDiv">Count: {this.state.count}</div>
        <div className="buttonsDiv">
          <button className="btnInc" onClick={this.handleAddCount}>+</button>
          <button className="btnDec" onClick={this.handleSubtractCount}>-</button>
          <button className="btnRes" onClick={this.handleResetToZero}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter;