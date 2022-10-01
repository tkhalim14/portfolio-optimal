import logo from '../../Sharingan.png';
import './style.css';
import React,{useState} from 'react';

function Home() {

  const [click,useclick]=useState(true);

  return (
    <>
    <div>
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
    
    </>
  );
}

export default Home;
