import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, operation: null, next: null };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-display">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <div className="row1">
          <button type="button" className="cal-btn" onClick={this.clickEvent}>AC</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>+/-</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>%</button>
          <button type="button" className="orange-btn" onClick={this.clickEvent}>+-</button>
        </div>
        <div className="row2">
          <button type="button" className="cal-btn" onClick={this.clickEvent}>7</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>8</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>9</button>
          <button type="button" className="orange-btn" onClick={this.clickEvent}>x</button>
        </div>
        <div className="row3">
          <button type="button" className="cal-btn" onClick={this.clickEvent}>4</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>5</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>6</button>
          <button type="button" className="orange-btn" onClick={this.clickEvent}>-</button>
        </div>
        <div className="row4">
          <button type="button" className="cal-btn" onClick={this.clickEvent}>1</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>2</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>3</button>
          <button type="button" className="orange-btn" onClick={this.clickEvent}>+</button>
        </div>
        <div className="row5">
          <button type="button" className="zero-btn" onClick={this.clickEvent}>0</button>
          <button type="button" className="cal-btn" onClick={this.clickEvent}>.</button>
          <button type="button" className="orange-btn" onClick={this.clickEvent}>=</button>
        </div>
      </div>
    );
  }
}
