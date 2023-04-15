import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState(1);
  const keypadVal = [
    7,
    8,
    9,
    'DEL',
    4,
    5,
    6,
    '+',
    1,
    2,
    3,
    '-',
    '.',
    0,
    '/',
    'x',
    'RESET',
    '=',
  ];
  useEffect(() => {
    document.body.style.background =
      bgColor === 1
        ? 'hsl(222, 26%, 31%)'
        : bgColor === 2
        ? 'hsl(0, 0%, 90%)'
        : 'hsl(268, 75%, 9%)';
  }, [bgColor]);
  const [expression, setExpression] = useState('');
  const getResult = (expression) => {
    const operand = [];
    const operator = [];
    let tempOperand = '';
    for (let i = 0; i < expression.length; i++) {
      if (
        expression.charAt(i) === '+' ||
        expression.charAt(i) === '-' ||
        expression.charAt(i) === 'x' ||
        expression.charAt(i) === '/'
      ) {
        operator.push(expression.charAt(i));
        if (tempOperand.includes('.')) {
          operand.push(parseFloat(tempOperand).toFixed(2));
        } else {
          operand.push(parseInt(tempOperand));
        }

        tempOperand = '';
      } else {
        tempOperand = tempOperand + expression.charAt(i);
      }
    }
    if (tempOperand) {
      if (tempOperand.includes('.')) {
        operand.push(parseFloat(tempOperand).toFixed(2));
      } else {
        operand.push(parseInt(tempOperand));
      }
    }
    let result = operand[0];
    for (let i = 1; i < operand.length; i++) {
      let operatorExp = operator.shift();
      if (operatorExp === '+') {
        result = operand[i] + result;
      } else if (operatorExp === '-') {
        result = result - operand[i];
      } else if (operatorExp === 'x') {
        result = result * operand[i];
      } else if (operatorExp === '/') {
        result = result / operand[i];
      }
    }
    setExpression(result);
  };

  const screenResultHandler = (key) => {
    switch (key) {
      case 0:
        setExpression(expression + 0);
        return;
      case 1:
        setExpression(expression + 1);
        return;
      case 2:
        setExpression(expression + 2);
        return;
      case 3:
        setExpression(expression + 3);
        return;
      case 4:
        setExpression(expression + 4);
        return;
      case 5:
        setExpression(expression + 5);
        return;
      case 6:
        setExpression(expression + 6);
        return;
      case 7:
        setExpression(expression + 7);
        return;
      case 8:
        setExpression(expression + 8);
        return;
      case 9:
        setExpression(expression + 9);
        return;
      case '.':
        setExpression(expression + '.');
        return;
      case '+':
        setExpression(expression + '+');
        return;
      case '-':
        setExpression(expression + '-');
        return;
      case 'x':
        setExpression(expression + 'x');
        return;
      case '/':
        setExpression(expression + '/');
        return;
      case 'DEL':
        setExpression(expression.substring(0, expression.length - 1));
        return;
      case 'RESET':
        setExpression('');
        return;
      case '=':
        getResult(expression);
        return;
      default:
        return;
    }
  };

  return (
    <div className='calculator-container'>
      <div className='calculator-header'>
        <h2
          style={{
            color:
              bgColor === 1
                ? ' hsl(0, 0%, 100%)'
                : bgColor === 2
                ? 'hsl(60, 10%, 19%)'
                : 'hsl(52, 100%, 62%)',
          }}
        >
          calc
        </h2>
        <div className='calculator-theme-selector'>
          <h4
            style={{
              color:
                bgColor === 1
                  ? ' hsl(0, 0%, 100%)'
                  : bgColor === 2
                  ? 'hsl(60, 10%, 19%)'
                  : 'hsl(52, 100%, 62%)',
            }}
          >
            Theme
          </h4>
          <div className='theme-selection'>
            <div
              className='numbers'
              style={{
                color:
                  bgColor === 1
                    ? ' hsl(0, 0%, 100%)'
                    : bgColor === 2
                    ? 'hsl(60, 10%, 19%)'
                    : 'hsl(52, 100%, 62%)',
              }}
            >
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div
              className='theme-select-toggle'
              style={{
                background:
                  bgColor === 1
                    ? 'hsl(223, 31%, 20%)'
                    : bgColor === 2
                    ? 'hsl(0, 5%, 81%)'
                    : 'hsl(268, 71%, 12%)',
              }}
            >
              <div
                className={
                  bgColor === 1
                    ? 'theme-pointer-1 theme-selection-area'
                    : 'theme-selection-area'
                }
                onClick={() => setBgColor(1)}
              ></div>
              <div
                className={
                  bgColor === 2
                    ? 'theme-pointer-2 theme-selection-area'
                    : 'theme-selection-area'
                }
                onClick={() => setBgColor(2)}
              ></div>
              <div
                className={
                  bgColor === 3
                    ? 'theme-pointer-3 theme-selection-area'
                    : 'theme-selection-area'
                }
                onClick={() => setBgColor(3)}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='calculator-result-screen'
        style={{
          background:
            bgColor === 1
              ? 'hsl(224, 36%, 15%)'
              : bgColor === 2
              ? 'hsl(0, 0%, 93%)'
              : 'hsl(268, 71%, 12%)',
          color:
            bgColor === 1
              ? ' hsl(0, 0%, 100%)'
              : bgColor === 2
              ? 'hsl(60, 10%, 19%)'
              : 'hsl(52, 100%, 62%)',
        }}
      >
        {expression}
      </div>
      <div
        className='calculator-keypad'
        style={{
          background:
            bgColor === 1
              ? 'hsl(224, 36%, 15%)'
              : bgColor === 2
              ? 'hsl(0, 0%, 93%)'
              : 'hsl(268, 71%, 12%)',
        }}
      >
        <div className='keypad'>
          {keypadVal.map((keys) => (
            <div
              className={
                keys === 'RESET'
                  ? bgColor === 1
                    ? 'reset-key'
                    : bgColor === 2
                    ? 'reset-key-1'
                    : 'reset-key-2'
                  : keys === '='
                  ? bgColor === 1
                    ? 'equal-key'
                    : bgColor === 2
                    ? 'equal-key-1'
                    : 'equal-key-2'
                  : keys === 'DEL'
                  ? bgColor === 1
                    ? 'del-key'
                    : bgColor === 2
                    ? 'del-key-1'
                    : 'del-key-2'
                  : bgColor === 1
                  ? 'key'
                  : bgColor === 2
                  ? 'key-1'
                  : 'key-2'
              }
              onClick={() => screenResultHandler(keys)}
            >
              {keys}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
