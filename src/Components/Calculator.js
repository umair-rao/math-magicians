import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-display">
        <div className="result">0</div>
        <div className="row1">
          <button type="button" className="cal-btn">AC</button>
          <button type="button" className="cal-btn">+/-</button>
          <button type="button" className="cal-btn">%</button>
          <button type="button" className="orange-btn">+-</button>
        </div>
        <div className="row2">
          <button type="button" className="cal-btn">7</button>
          <button type="button" className="cal-btn">8</button>
          <button type="button" className="cal-btn">9</button>
          <button type="button" className="orange-btn">x</button>
        </div>
        <div className="row3">
          <button type="button" className="cal-btn">4</button>
          <button type="button" className="cal-btn">5</button>
          <button type="button" className="cal-btn">6</button>
          <button type="button" className="orange-btn">-</button>
        </div>
        <div className="row4">
          <button type="button" className="cal-btn">1</button>
          <button type="button" className="cal-btn">2</button>
          <button type="button" className="cal-btn">3</button>
          <button type="button" className="orange-btn">+</button>
        </div>
        <div className="row5">
          <button type="button" className="zero-btn">0</button>
          <button type="button" className="cal-btn">.</button>
          <button type="button" className="orange-btn">=</button>
        </div>
      </div>
    );
  }
}
