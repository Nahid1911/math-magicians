import React from 'react';

const TextArea = () => (
  <div className="textAreaDiv">
    <input type="text" />
  </div>
);

const Numpad = () => (
  <div className="numbDiv">
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button className="largeBtn" type="button">0</button>
    <button type="button">.</button>
  </div>
);

const Signs = () => (
  <div className="signDiv">
    <button type="button">+</button>
    <button type="button">x</button>
    <button type="button">-</button>
    <button type="button">+</button>
    <button type="button">=</button>
  </div>
);

const Calculator = () => (
  <div className="mainDiv">
    <TextArea />
    <div className="buttonDiv">
      <Numpad />
      <Signs />
    </div>
  </div>
);

export default Calculator;
