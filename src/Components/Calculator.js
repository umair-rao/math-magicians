import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, operation: null, next: null });
  const { total, operation, next } = state;
  const clickEvent = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator-display">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <div className="row1">
        <button type="button" className="cal-btn" onClick={clickEvent}>AC</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>+/-</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>%</button>
        <button type="button" className="orange-btn" onClick={clickEvent}>÷</button>
      </div>
      <div className="row2">
        <button type="button" className="cal-btn" onClick={clickEvent}>7</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>8</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>9</button>
        <button type="button" className="orange-btn" onClick={clickEvent}>x</button>
      </div>
      <div className="row3">
        <button type="button" className="cal-btn" onClick={clickEvent}>4</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>5</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>6</button>
        <button type="button" className="orange-btn" onClick={clickEvent}>-</button>
      </div>
      <div className="row4">
        <button type="button" className="cal-btn" onClick={clickEvent}>1</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>2</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>3</button>
        <button type="button" className="orange-btn" onClick={clickEvent}>+</button>
      </div>
      <div className="row5">
        <button type="button" className="zero-btn" onClick={clickEvent}>0</button>
        <button type="button" className="cal-btn" onClick={clickEvent}>.</button>
        <button type="button" className="orange-btn" onClick={clickEvent}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
