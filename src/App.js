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
        12
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
