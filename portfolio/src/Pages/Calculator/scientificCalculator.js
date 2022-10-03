import './style.css';
import React, { useCallback,useState,useEffect } from 'react';

function SciCalculator() {

  const[counter,setcounter] = useState(-1);
  const[result, setResult] = useState('');
  const[ans, setans] = useState();

  useEffect(() => {
    setcounter(prevResult=>prevResult+1);
  //   console.log('Rendering.....');
  //   return console.log('Unmounted.....');
  }, [ans]);

  const dis = useCallback((val) => {
    // setResult(result+val);
    if(val!==8 || val==='8')
      setResult(prevResult=>prevResult+val);
    else
      setResult(result?.slice(0, -1));
    // problems se bachne ke liye
  }, [result]);

  function solve() {
    setans(eval(result));
    setResult(eval(result));
  }

  function clr() {
    setResult('');
  }

  // function KeyPresser (keyno){
    // (event)=>{
      // if(event.keyCode === keyno){
        // if(event.keyCode === 13){
          // solve
        // }
        // else{
          // dis(keyno)
        // }
      // }
    // }
  // //}
  const escFunction = useCallback((event) => {
    switch(event.keyCode) {
      case 27:console.log("esc pressed");
      clr();
      break;
      case 13:console.log("enter is pressed");
      document.getElementById("enter").click();
      break;
      case 187:console.log("= is pressed");
      document.getElementById("enter").click();
      break;
      case 48:console.log("0 is pressed");
      dis('0');
      break;
      case 96:console.log("0 is pressed");
      dis('0');
      break;
      case 49:console.log("1 is pressed");
      dis('1');
      break;
      case 97:console.log("1 is pressed");
      dis('1');
      break;
      case 50:console.log("2 is pressed");
      dis('2');
      break;
      case 98:console.log("2 is pressed");
      dis('2');
      break;
      case 51:console.log("3 is pressed");
      dis('3');
      break;
      case 99:console.log("3 is pressed");
      dis('3');
      break;
      case 52:console.log("4 is pressed");
      dis('4');
      break;
      case 100:console.log("4 is pressed");
      dis('4');
      break;
      case 53:console.log("5 is pressed");
      dis('5');
      break;
      case 101:console.log("5 is pressed");
      dis('5');
      break;
      case 54:console.log("6 is pressed");
      dis('6');
      break;
      case 102:console.log("6 is pressed");
      dis('6');
      break;
      case 55:console.log("7 is pressed");
      dis('7');
      break;
      case 103:console.log("7 is pressed");
      dis('7');
      break;
      case 56:console.log("8 is pressed");
      dis('8');
      break;
      case 104:console.log("8 is pressed");
      dis('7');
      break;
      case 57:console.log("9 is pressed");
      dis('9');
      break;
      case 105:console.log("9 is pressed");
      dis('9');
      break;
      case 190:console.log(". is pressed");
      dis('.');
      break;
      case 107:console.log("+ is pressed");
      dis('+');
      break;
      case 111:console.log("/ is pressed");
      dis('/');
      break;
      case 106:console.log("* is pressed");
      dis('*');
      break;
      case 8: console.log("Backspace is pressed");
      dis(8);
      break;
      default: console.log("Error");
      break;
    }
  }, [dis]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);
  const [click,useclick]=useState(true);
  return (
            <div className="calculator">
              <p className="lol" style={{ height: "60%" }} onClick={() => useclick(!click) }>
                Scientific Calculator
              </p>
              <div style={{ marginTop: "1vh"}}>This calculator has done {counter} no. of calculations.</div>
              <input disabled className="calculator__display" value={result}
                // onChange={(e) => setResult(result+e.target.value)}
              />
              <div className="calculator__keys">
                <button className="key--operator" onClick={() => dis('+')}>+</button>
                <button className="key--operator" onClick={() => dis('-')}>-</button>
                <button className="key--operator" onClick={() => dis('*')}>&times;</button>
                <button className="key--operator" onClick={() => dis('/')}>÷</button>
                <button onClick={() => dis('7')}>7</button>
                <button onClick={() => dis('8')}>8</button>
                <button onClick={() => dis('9')}>9</button>
                <button onClick={() => dis('4')}>4</button>
                <button onClick={() => dis('5')}>5</button>
                <button onClick={() => dis('6')}>6</button>
                <button onClick={() => dis('1')}>1</button>
                <button onClick={() => dis('2')}>2</button>
                <button onClick={() => dis('3')}>3</button>
                <button onClick={() => dis('0')}>0</button>
                <button onClick={() => dis('.')}>.</button>
                <button onClick={() => dis('**2')}>^2</button>
                <button onClick={() => dis('**')}>^x</button>
                <button onClick={() => dis('sin(')}>sin </button>
                <button onClick={() => dis('3.1415926')}>&pi;</button>
                <button onClick={() => dis('(')}>(</button>
                <button onClick={() => dis(')')}>)</button>
                <button onClick={()=> dis('Math.abs(')}>|x|</button>
                <button onClick={() => dis('2.71')}>e</button>
                <button onClick={clr}>AC</button>
                <button className="key--equal" id="enter" onClick={solve}>=</button>
              </div>
            </div>
  );
}

export default SciCalculator;
