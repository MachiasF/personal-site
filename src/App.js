import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Settings from './Settings.js'; 
import About from './About.js'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="navigation">
        <Link to="/" className="navigation-logo">
          <img src="./pixelartMint.png" className="logo" />
          <div className="logo-name">Machias.JF</div>
        </Link>
        <div className="navigation-sub">
          <Link to="/about" className="item-about">About</Link>
          <Link to="/projects" className="item-projects">Projects</Link>
          <Link to="/settings" className="item-settings">Settings</Link>     
        </div>
      </div>
    </div>

    <Route path="/about" component={About} /> 
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/settings" component={Settings} />
    
    </BrowserRouter>
  );
}

export default App;
