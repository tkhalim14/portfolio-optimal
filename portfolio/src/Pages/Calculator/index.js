import './style.css';
import React, {useState} from 'react';
import SciCalculator from './scientificCalculator';
import NormalCalculator from './NormalCalculator';

function Calculator() {
  const [click,useclick]=useState(true);
  return (
    <>
      <div className='Calc-root'>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className="Calc-card">
          <div className={`${click?'flip-card-inner':'flip-card-inner rotate'}`}>
            <div className="calculator-normal">
              <div className="calculator">
                <p className="lol" onClick={() => useclick(!click) }>
                  Calculator
                </p>
                <NormalCalculator/>
              </div>
            </div>
            <div className="calculator-scientific">
              <div className="calculator">
                <p className="lol" onClick={() => useclick(!click) }>
                Scientific Calculator
                </p>
                <SciCalculator/>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Calculator;
