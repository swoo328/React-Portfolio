import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Router>
  );
}

export default App;
