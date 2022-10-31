import React,{useState} from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import {
	Link
  } from "react-router-dom";

import './style.css';


export default function Header() {
	const [offset, setOffset] = useState('#8BBCCC');
	window.addEventListener("scroll",myFunction);

function myFunction() {
  if (document.documentElement.scrollTop > 1570) {
    setOffset('rgb(217, 0, 255)');
  } else if(document.documentElement.scrollTop > 770){
    setOffset('rgba(121, 120, 255,1)');
  }
  else{
	setOffset('#8BBCCC');
  }
}
	return(
		<React.Fragment>
			<AppBar className='app_header' style={{backgroundColor: offset,transition:'0.5s'}}>
				<Toolbar className={`toolbar`}>
					<div className='portfolio-title'>
						<a href="/">My Portfolio</a>
					</div>
					<nav style={{justifyContent: 'space-between',display:'flex'}}>
						<Link to="/" className="links">Home</Link>
						<Link to="/Calculator" className="links">Calculator</Link>
						<Link to="/AI" className="links">PathFinder</Link>
						<Link to="/AboutMe" className="links">About&nbsp;Me</Link>
					</nav>
					<Typography variant="h6" component="div"/>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</React.Fragment>	
	);
}