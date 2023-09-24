import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ArticlePage from "./Pages/ArticlePage";
import Navbar from "./Pages/Navbar"

function App() {
  return (
    <Router> 
      <div className="App">
      

        <Navbar />
      
        
          <ArticlePage />
      </div>
    </Router>
  );
}

export default App;
