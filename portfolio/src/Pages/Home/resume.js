import './resume.css';
import React,{useState} from 'react';
import Bounce from 'react-reveal/Bounce';
import '../../Components/ScrollDown/style.css'

function Resume(){

    const [isscroll, setbool] = useState('');
	window.addEventListener("scroll", myFunction);

function myFunction() {
  if (document.documentElement.scrollTop > 0) {
    setbool('none');
  }
  else{
    setbool('');
  }
}
    return (
        <div>
            <div className="grid">
                <Bounce bottom>
                    <div className="effect-background">
                        <div className="effect-hera">
                            <figcaption>
                                <h2>My<span>Resume</span></h2>
                                <p className="reveal">
                                    <a className="reveal" href='https://docs.google.com/document/d/1FTaxzn7rCfry6-7_Z1oMIsHLvUcLBfZO0_UTNUZ_Tt8/edit?usp=sharing'>📄</a>
                                    .docs
                                </p>
                            </figcaption>		
                        </div>
                    </div>
                </Bounce>
            </div>
            <div className={!isscroll?'scroll':'scroll none'}>
                <div className='ca3-scroll-down-link'>
                    <div className='ca3-scroll-down-link'/>  
                    <div className='text'>
                    {isscroll!==''?'':'Scroll Down'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;