import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
