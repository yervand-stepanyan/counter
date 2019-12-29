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
    localStorage.setItem("count", JSON.stringify(this.state.count));

    return (
      <div className="main">
        <div className="countDiv">Count: {this.state.count}</div>
        <div className="buttonsDiv">
          <div className="button">
            <button className="btnInc btn" onClick={this.handleAddCount}>+</button>
          </div>
          <div className="button">
            <button className={this.state.count === 0 ? "btnDisabled" : "btnDec"}
                    onClick={this.handleSubtractCount}
                    disabled={this.state.count <= 0}>
              -
            </button>
          </div>
          <div className="button">
            <button className={this.state.count === 0 ? "btnDisabled" : "btnRes"}
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