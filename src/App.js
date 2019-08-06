import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import getRouter from './router';

import './assets/css/reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            {getRouter()}
        </Router>
    </div>
  );
}

export default App;
