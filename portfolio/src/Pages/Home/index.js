import logo from '../../Components/Media/Sharingan.png';
import './style.css';
import './set2.css';
import React,{useState} from 'react';
import App from './timeline.js';
import Fapp from './newtem';

function Home() {

  const [click,useclick]=useState(true);

  return (
    <>
    <div className='home_root'>
      {/*<div style={{display:'flex',justifyContent:'space-evenly',height:'80vh'}}>
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
        </div>*/} 
        <div className="grid">
          <div className="effect-background">
            <div className="effect-hera">
            <figcaption className="element">
              <h2>My&nbsp;<span>Resume</span></h2>
                <p className="reveal">
                  <a className="reveal" href='#' style={{fontSize: '5vh'}}>📄</a>
									<br/>My Resume
								</p>
							</figcaption>		
						</div>
					</div>
				</div>
    <div>
      <Fapp/>
    </div>
    <div style={{position:'flex',padding:'1vh'}}>
      <App/>
    </div>
    </div>
    
    </>
  );
}

export default Home;
