import './style.css';
import React from 'react';
import ProfilePic from './Profile pic.jpeg';
import Instagram from './instagram.svg';
import Gmail from './gmail.svg';
import github from './github.svg';

function AIPathFinder() {

  return (
    <>
    <div className="App" style={{height:"36vw" , width:"36vw"}}>
      <div className="Snkbar">
        Hover Me!
      </div>
    <aside class="profile-card">
<header>
  <a href="https://www.instagram.com/thesnagtalker007/">
    <img src={ProfilePic} alt="Tabish_profile_pic"/>
  </a>
  <h1><b>TABISH KHALID HALIM</b></h1>
  <h2>STUDENT<br/>
  IIT Dharwad</h2>

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
    </>
  );
}

export default AIPathFinder;
