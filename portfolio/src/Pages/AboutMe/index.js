import './style.css';
import './glitch.css';
import React,{useState} from 'react';
import ProfilePic from '../../Components/Media/DP.jpeg';
import Instagram from './instagram.svg';
import Gmail from './gmail.svg';
import github from './github.svg';
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';

function Info() {

  const [offset, setOffset] = useState('auto');

  return (
    <div className='home_root'>
    <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'4%'}}>
    <div className="Info_Card" style={{height:"74vh" , width:"34vw",scale:"1.17"}}>
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
  <div class="stack" style={{"--TABISH KHALID HALIM": 3}}>
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
        My Badges!
      </div>
      <HeadShake>
        <div class="badges">
          <ul >
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
            <li>
              <a href="https://github.com/tkhalim14">
                <img src={github} alt="Github"/>
              </a>
            </li>
          </ul>
          
          <ul >
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
            <li>
              <a href="https://github.com/tkhalim14">
                <img src={github} alt="Github"/>
              </a>
            </li>
          </ul>

          <ul >
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
            <li>
              <a href="https://github.com/tkhalim14">
                <img src={github} alt="Github"/>
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
