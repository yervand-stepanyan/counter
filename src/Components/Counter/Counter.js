import React from "react";
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    const countFromLocalStorage = JSON.parse(localStorage.getItem("count"));

    this.state = {
      count: countFromLocalStorage || this.props.initialCount,
    };
  }

  handleAddCount = () => {
    const count = this.state.count + 1;

    this.setState({count});

    localStorage.setItem("count", JSON.stringify(count));
  };

  handleSubtractCount = () => {
    const count = this.state.count - 1;

    this.setState({count});

    localStorage.setItem("count", JSON.stringify(count));
  };

  handleResetToZero = () => {
    const count = 0;

    this.setState({count});

    localStorage.setItem("count", JSON.stringify(count));
  };

  render() {
    return (
      <div className="main">
        <div className="countDiv">Count: {this.state.count}</div>
        <div className="buttonsDiv">
          <div className="button">
            <button className="btnInc btn" onClick={this.handleAddCount}>+</button>
          </div>
          <div className="button">
            <button className={`${this.state.count === 0 ? "btnDisabled" : "btnDec"} btn`}
                    onClick={this.handleSubtractCount}
                    disabled={this.state.count <= 0}>
              -
            </button>
          </div>
          <div className="button">
            <button className={`${this.state.count === 0 ? "btnDisabled" : "btnRes"} btn`}
                    onClick={this.handleResetToZero}
                    disabled={this.state.count <= 0}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;