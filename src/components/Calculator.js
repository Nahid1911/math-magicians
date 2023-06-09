import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const handleTextChange = (event) => {
    setCalculatorData((prevData) => ({
      ...prevData,
      next: event.target.value,
    }));
  };

  return (
    <div className="mainDiv">
      <TextArea
        value={calculatorData.next || calculatorData.total || '0'}
        handleChange={handleTextChange}
      />
      <div className="buttonDiv">
        <Numpad handleButtonClick={handleButtonClick} />
        <Signs handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

const TextArea = ({ value, handleChange }) => (
  <div className="textAreaDiv">
    <input type="text" value={value || ''} onChange={handleChange} />
  </div>
);

TextArea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  value: '',
};

const Numpad = ({ handleButtonClick }) => (
  <div className="numbDiv">
    <button type="button" onClick={() => handleButtonClick('AC')}>AC</button>
    <button type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
    <button type="button" onClick={() => handleButtonClick('%')}>%</button>
    <button type="button" onClick={() => handleButtonClick('7')}>7</button>
    <button type="button" onClick={() => handleButtonClick('8')}>8</button>
    <button type="button" onClick={() => handleButtonClick('9')}>9</button>
    <button type="button" onClick={() => handleButtonClick('4')}>4</button>
    <button type="button" onClick={() => handleButtonClick('5')}>5</button>
    <button type="button" onClick={() => handleButtonClick('6')}>6</button>
    <button type="button" onClick={() => handleButtonClick('1')}>1</button>
    <button type="button" onClick={() => handleButtonClick('2')}>2</button>
    <button type="button" onClick={() => handleButtonClick('3')}>3</button>
    <button className="largeBtn" type="button" onClick={() => handleButtonClick('0')}>0</button>
    <button type="button" onClick={() => handleButtonClick('.')}>.</button>
  </div>
);

Numpad.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

const Signs = ({ handleButtonClick }) => (
  <div className="signDiv">
    <button type="button" onClick={() => handleButtonClick('÷')}>÷</button>
    <button type="button" onClick={() => handleButtonClick('x')}>x</button>
    <button type="button" onClick={() => handleButtonClick('-')}>-</button>
    <button type="button" onClick={() => handleButtonClick('+')}>+</button>
    <button type="button" onClick={() => handleButtonClick('=')}>=</button>
  </div>
);

Signs.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Calculator;
