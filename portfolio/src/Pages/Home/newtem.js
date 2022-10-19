import React,{useRef} from 'react';
import { Grid, Typography } from '@mui/material';
import './style.css';
import Fade from 'react-reveal/Fade';
import Typewriter from "typewriter-effect";
import lottie from 'lottie-web';
import TextLoop from "react-text-loop";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import ProfilePic from '../../Components/Media/DP.jpeg';
import LazyLoad from 'react-lazy-load';

const HomeSVG = () => {
    const container = useRef(null);
    
    React.useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('./Homesvg.json'),
		});

		return () => {
			container.current = null;
		}
	}, []);
    
  return (
    <div ref={container} />
  )
}

const Hello = ['Hey There !','Konnichiwa !','Hola !','ٱلسَّلَامُ عَلَيْكُمْ','Bonjour !'];
const Greetings = () => {
    return (
            <Fade>
            <Typewriter
                options={{
                    strings: Hello,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                    skipAddStyles: true,
                }}
            />
            </Fade>
    )
}

const phrases = ['Artificial Intelligence', 'Application Development', 'Competitive Programming', 'Graphic Designing', 'Open Source Work'];

const Designation = () => {
    return (
        <TextLoop children={phrases} fade={true} adjustingSpeed='100'>
        </TextLoop>
    )
}

function Fapp() {
    return (
        <div style={{backgroundColor:'#6495ED',marginTop:'20vh'}}>
            <hr />
            <br/>
            <br/>
            <div>
            <Grid container sx={{ diplay:'flex',flexDirection: { xs: 'column-reverse', md: 'row' } }}>
      <Grid item md={6} xs={12}>
        <span style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Typography variant="h3">
                <span style={{color:'#BF40BF',fontWeight:800,textShadow:'2px 4px orange'}}><Greetings/></span>
            </Typography>
            <div className='Pic'>
                <LazyLoad>
                    <Zoom>
                        <img src={ProfilePic} alt="Tabish_profile_pic"/>
                    </Zoom>
                </LazyLoad>
            </div>
            <Typography variant="h4" style={{textShadow:'1px 1px black'}}>
                I am<br/>
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
            <span className="name">Tabish Khalid Halim</span>
            </Typography>
            <br/>
            <br/>
            <Typography variant="h4">
            I live in a world of &nbsp;
                <span className="designation" style={{fontWeight: 800}}>
                    <Designation />
                </span>
            </Typography>
        </span>
        
      </Grid>
      <Grid item md={6} xs={12}>
        <LazyLoad>
            <Fade up duration={500}>
                <HomeSVG/>
            </Fade>
        </LazyLoad>
      </Grid>
    </Grid>
            </div>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    );
  }
  
  export default Fapp;