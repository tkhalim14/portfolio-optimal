import './style.css';
import React, {useState} from 'react';
import SciCalculator from './scientificCalculator';
import NormalCalculator from './NormalCalculator';

function RenderNormCalculator(props){
  const Normal = props.normal; 
  if(Normal){
    return <NormalCalculator/>;
  }
  else{
    return ;
  }
}
function RenderSciCalculator(props){
  const Normal = props.normal; 
  if(Normal){
    return <SciCalculator/>;
  }
  else{
    return ;
  }
}

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
                <p className="card-title" onClick={() => useclick(!click) }>
                  Calculator
                </p>
                <RenderNormCalculator normal={click}/>
              </div>
            </div>
            <div className="calculator-scientific">
              <div className="calculator">
                <p className="card-title" onClick={() => useclick(!click) }>
                Scientific Calculator
                </p>
                <RenderSciCalculator normal={!click}/>
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
