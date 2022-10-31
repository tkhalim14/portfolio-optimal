import './style.css';
import './glitch.css';
import React,{useState} from 'react';
import ProfilePic from '../../Components/Media/DP.jpeg';
import Instagram from './instagram.svg';
import Gmail from './gmail.svg';
import github from './github.svg';
import java from './java-icon.svg';
import javascript from './javascript-icon.svg';
import python from './python-icon.svg';
import c1 from './c++.svg';
import c2 from './c.svg';
import django from './django.svg';
import react from './react.svg';
import nextjs from './next-js.svg';
import flutter from './flutterio-icon.svg';
import mysql from './mysql.svg';
import php from './php.svg';
import mongodb from './mongodb.svg';
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';

function Info() {

  const [offset, setOffset] = useState('auto');

  return (
    <div className='home_root'>
    <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'4vh'}}>
    <div className="Info_Card" style={{height:"74vh" , width:"34vw",scale:"1.15"}}>
      <div className="Snkbar" style={{height: offset}}>
        {offset==="auto"?"Hover Me!":"__________"}
      </div>
    <aside class="profile-card" onMouseEnter={()=>{setOffset(0)}} onMouseLeave={()=>{setOffset('auto')}}>
<header>
  <Zoom>
  <a href="https://www.instagram.com/thesnagtalker007/">
    <img src={ProfilePic} alt="Tabish_profile_pic"/>
  </a>
  </Zoom>
  <div style={{marginTop:'2vh'}}>
  <h1>
  <div className="stack" style={{"--TABISH KHALID HALIM": 3}}>
    <span style={{"--index": 0}}>TABISH KHALID HALIM<br/></span>
    <span style={{"--index": 1}}>TABISH KHALID HALIM<br/></span>
    <span style={{"--index": 2}}>TABISH KHALID HALIM<br/></span>
  </div>
  </h1>
  <h2>
  <div class="stack" style={{"--STUDENT<br/>IIT Dharwad": 3}}>
    <span style={{"--index": 0}}>STUDENT<br/>
  IIT Dharwad</span>
    <span style={{"--index": 1}}>STUDENT<br/>
  IIT Dharwad</span>
    <span style={{"--index": 2}}>STUDENT<br/>
  IIT Dharwad</span>
  </div>
  </h2>
  </div>
  
</header>

<div class="profile-bio">
  <p>
    Hello, Myself, Tabish and I'm currently pursuing my B.Tech in CSE from IIT Dharwad.
    I'm just a passionate & compassionate person who likes to code and always work hard to improve
    and explore new things.
  </p>
  <p>
Interested in Frontend, Backend, Competitive Programming, Application Development & AI.</p>

</div>

<ul class="profile-social-links">

  <li>
    <a href="https://www.instagram.com/thesnagtalker007/">
      <img src={Instagram} alt="Instagram"/>
    </a>
  </li>
  <li>
    <a href="mailto:tkhalim14@gmail.com">
      <img src={Gmail} alt="Gmail"/>
    </a>
  </li>
  <li>
    <a href="https://github.com/tkhalim14">
      <img src={github} alt="Github"/>
    </a>
  </li>
</ul>

</aside>  
    </div>

    <div className="Info_Card" style={{height:"70vh" , width:"34vw",scale:"1.17"}}>
      <div className="Snkbar">
        My Badges !
      </div>
      <HeadShake>
        <div class="badges">
          <ul >
            <li>
              <a>
                <img src={java} alt="java"/>
              </a>
            </li>
            <li>
              <a>
                <img src={javascript} alt="javascript"/>
              </a>
            </li>
            <li><a>
                <img src={c1} alt="c++" style={{width:'85%',transform:'scale(0.7)'}}/>
                </a>
            </li>
            <li>
              <a>
                <img src={python} alt="python"/>
              </a>
            </li>
          </ul>
          
          <ul >
            <li>
              <a>
                <img src={c2} alt="c"/>
              </a>
            </li>
            <li>
              <a>
                <img src={django} alt="django" style={{width:'85%',transform:'scale(0.7)'}}/>
              </a>
            </li>
            <li>
              <a>
                <img src={react} alt="react" style={{width:'85%',transform:'scale(0.7)'}}/>
              </a>
            </li>
            <li>
              <a>
                <img src={nextjs} alt="nextjs"/>
              </a>
            </li>
          </ul>

          <ul >
            <li>
              <a>
                <img src={flutter} alt="flutter" style={{width:'95%',transform:'scale(0.6)'}}/>
              </a>
            </li>
            <li>
              <a>
                <img src={mysql} alt="mysql"/>
              </a>
            </li>
            <li>
              <a>
                <img src={php} alt="php"/>
              </a>
            </li>
            <li>
              <a>
                <img src={mongodb} alt="mongodb"/>
              </a>
            </li>
          </ul>
        </div>
      </HeadShake>
    </div>
    </div>
    </div>
  );
}

export default Info;
