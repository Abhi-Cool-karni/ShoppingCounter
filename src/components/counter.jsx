import React, { Component } from "react";

class Counter extends Component {
  // Render the data which will display on screen by comparing VDOM to DOM by react
  render() {
    return (
      <div id={"container-" + this.props.counter.id}>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1">
          -
        </button>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1">
          +
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1">
          Delete
        </button>
      </div>
    );
  }

  // helper methods
  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
