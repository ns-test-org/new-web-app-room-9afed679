'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  // INTENTIONAL ERROR: Using undefined variable to cause build failure
  const handleButtonClick = (value) => {
    console.log(undefinedVariable); // This will cause an error
    
    if (value === 'C') {
      clearAll();
    } else if (value === '=') {
      performCalculation();
    } else if (['+', '-', '*', '/'].includes(value)) {
      inputOperation(value);
    } else {
      inputNumber(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Simple Calculator
        </h1>
        
        {/* Display */}
        <div className="bg-gray-900 text-white text-right text-2xl p-4 rounded mb-4 font-mono">
          {display}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            onClick={() => handleButtonClick('C')}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded"
          >
            Clear
          </button>
          <button
            onClick={() => handleButtonClick('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded"
          >
            ÷
          </button>
          <button
            onClick={() => handleButtonClick('*')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded"
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            onClick={() => handleButtonClick('7')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick('8')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick('9')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick('-')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded"
          >
            −
          </button>

          {/* Row 3 */}
          <button
            onClick={() => handleButtonClick('4')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick('5')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick('6')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick('+')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded"
          >
            +
          </button>

          {/* Row 4 */}
          <button
            onClick={() => handleButtonClick('1')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick('2')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick('3')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick('=')}
            className="row-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => handleButtonClick('0')}
            className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick('.')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

