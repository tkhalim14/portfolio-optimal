
import './style.css';
import './resume.css';
import React from 'react';
import App from './timeline.js';
import Fapp from './newtem';
import Resume from './resume.js';

function Home() {

  return (
    <>
    <div className='home_root'>
        <Resume/>
        <Fapp/>
        <div style={{padding:'1vh'}}>
          <App/>
        </div>
    </div>
    </>
  );
}

export default Home;
