import React,{Component} from 'react';
import { AppBar, Toolbar, Typography,Container,Box} from '@mui/material';
import {
	Link
  } from "react-router-dom";

import './style.css';
import Logo from "../../logo.svg";


class Header extends Component {
	render() {
	return(
		<React.Fragment>
			<AppBar className='header'>
			<Toolbar className='toolbar'>
			My Website
			<nav style={{justifyContent: 'space-between',display:'flex'}}>
				<Link to="/" className="links">Home</Link>
				<Link to="/Calculator" className="links">Calculator</Link>
				<Link to="/AI" className="links">PathFinder</Link>
				<Link to="/AboutMe" className="links">About</Link>
			</nav>
				<Typography variant="h6" component="div"></Typography>
				

			</Toolbar>
			</AppBar>
			<Toolbar />
			</React.Fragment>	
			);
	}
}

export default Header;