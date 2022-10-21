import React,{useState} from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import {
	Link
  } from "react-router-dom";

import './style.css';


function Header() {
	const [offset, setOffset] = useState(0);
	window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    setOffset(1);
  } else {
    setOffset(0);
  }
}
	return(
		<React.Fragment>
			<AppBar className='app_header' style={{backgroundColor: '#8BBCCC'}}>
			<Toolbar className={`${offset?'toolbar offset':'toolbar'}`}>
			<div className='portfolio-title'><a href="/">My Portfolio</a></div>
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

export default Header;