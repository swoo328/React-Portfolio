import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class = "background"></div>
    </div>
  );
}

export default App;
