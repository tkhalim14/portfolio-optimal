import React,{useState} from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import {
	Link
  } from "react-router-dom";

import './style.css';


function Header() {
	const [offset, setOffset] = useState(0.5);
	window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    setOffset(1);
  } else {
    setOffset(0.5);
  }
}
	return(
		<React.Fragment>
			<AppBar className='app_header' style={{backgroundColor: 'rgba(220, 20, 60,0)'}}>
			<Toolbar className='toolbar' style={{backgroundColor: 'rgba(220, 20, 60,'+offset+')'}}>
			<div className='portfolio-title'>My Portfolio</div>
			<nav style={{justifyContent: 'space-between',display:'flex'}}>
				<Link to="/" className="links">Home</Link>
				<Link to="/Calculator" className="links">Calculator</Link>
				<Link to="/AI" className="links">PathFinder</Link>
				<Link to="/AboutMe" className="links">About</Link>
			</nav>
				<Typography variant="h6" component="div">
					
				</Typography>
				

			</Toolbar>
			</AppBar>
			<Toolbar />
			</React.Fragment>	
	);
}

export default Header;