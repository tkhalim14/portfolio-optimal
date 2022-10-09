import logo from '../../Sharingan.png';
import './style.css';
import React,{useState} from 'react';
import App from './timeline.js';
import Fapp from './newtem';

function Home() {

  const [click,useclick]=useState(true);

  return (
    <>
    <div className='home_root'>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='Home_card'>
          <div onClick={() => useclick(!click) } style={{marginTop:"5vh"}}>
              <img src={logo} className={`${click?'logo':'logo-spinning'}`} alt='logo' width='50%' />
              <h1>
              {click?"Genjutsu":"Amaterasu"}
              </h1>
          </div>
          <p className="lol">
            Omeirawa Mou Shinderu
          </p>
        </div>
        <div className='Home_card'>
          <div onClick={() => useclick(!click) } style={{marginTop:"5vh"}}>
              <img src={logo} className={`${click?'logo':'logo-spinning'}`} alt='logo' width='50%' />
              <h1>
              {click?"Genjutsu":"Amaterasu"}
              </h1>
          </div>
          <p className="lol">
            Omeirawa Mou Shinderu
          </p>
        </div>
      </div>
      <Fapp/>
    <div style={{position:'flex !important',padding:'1vh'}}>
      <App/>
    </div>
    </div>
    
    </>
  );
}

export default Home;
