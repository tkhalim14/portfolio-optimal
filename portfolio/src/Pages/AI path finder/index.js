import logo from '../../Sharingan.png';
import './style.css';
import React,{useState} from 'react';

function AIPathFinder() {

  const [click,useclick]=useState(true);

  return (
    <>
    <div className="App" style={{height:"36vw" , width:"36vw"}}>
      <br/>
        <div onClick={() => useclick(!click) }>
            <img src={logo} className={`${click?'App-logo':'App-logo-spinning'}`} alt='logo' width='50%' />
            <h1>
            {click?"Genjutsu":"Amaterasu"}
            </h1>
        </div>
        <p className="lol">
          Just another day for overthinking and me.
        </p>
    </div>
    </>
  );
}

export default AIPathFinder;
