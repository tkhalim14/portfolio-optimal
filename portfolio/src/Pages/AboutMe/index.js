import './style.css';
import './glitch.css';
import React from 'react';
import ProfilePic from '../../Components/Media/DP.jpeg';
import Instagram from './instagram.svg';
import Gmail from './gmail.svg';
import github from './github.svg';

function Info() {

  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <div className="Info_Card" style={{height:"34vw" , width:"34vw",scale:"1.2"}}>
      <div className="Snkbar">
        Hover Me!
      </div>
    <aside class="profile-card">
<header>
  <a href="https://www.instagram.com/thesnagtalker007/">
    <img src={ProfilePic} alt="Tabish_profile_pic"/>
  </a>
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
    I'm just a passionate & compassionate person who likes to code and always work hard to improve
    and explore new things.
  </p>
  <p>CSE enthusiast.
Interested in Frontend, Backend, Competitive Programming, Application Development & AI.</p>

</div>

<ul class="profile-social-links">

  <li>
    <a href="https://www.instagram.com/thesnagtalker007/">
      <img src={Instagram}/>
    </a>
  </li>
  <li>
    <a href="mailto:tkhalim14@gmail.com">
      <img src={Gmail}/>
    </a>
  </li>
  <li>
    <a href="https://github.com/tkhalim14">
      <img src={github}/>
    </a>
  </li>
</ul>

</aside>  
    </div>

    <div className="Info_Card" style={{height:"34vw" , width:"34vw",scale:"1.2"}}>
      <div className="Snkbar">
        My Badges!
      </div>
      <div class="badges">
        <ul >
          <li>
            <a href="https://www.instagram.com/thesnagtalker007/">
              <img src={Instagram}/>
            </a>
          </li>
          <li>
            <a href="mailto:tkhalim14@gmail.com">
              <img src={Gmail}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
        </ul>
        
        <ul >
          <li>
            <a href="https://www.instagram.com/thesnagtalker007/">
              <img src={Instagram}/>
            </a>
          </li>
          <li>
            <a href="mailto:tkhalim14@gmail.com">
              <img src={Gmail}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
        </ul>

        <ul >
          <li>
            <a href="https://www.instagram.com/thesnagtalker007/">
              <img src={Instagram}/>
            </a>
          </li>
          <li>
            <a href="mailto:tkhalim14@gmail.com">
              <img src={Gmail}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
          <li>
            <a href="https://github.com/tkhalim14">
              <img src={github}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Info;
