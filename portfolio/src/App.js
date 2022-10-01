//import LazyLoad from 'react-lazyload';
import Header from './Components/Header/header';
import Background from './Components/Background/background.js';
import Home from './Pages/Home/index.js';
import Calculator from './Pages/Calculator/index.js';
import AIPathFinder from './Pages/AI path finder/index.js';
import AboutMe from './Pages/AboutMe/index.js';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";


function App() {

  return (
    <div className="Main">

      <Router>
      <Background/>
      <Header/>
      <div style={{backgroundColor:'rgba(215, 50, 60,0.7)'}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Calculator' element={<Calculator/>}/>
          <Route path='AI' element={<AIPathFinder/>}/>
          <Route path='AboutMe' element={<AboutMe/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
