import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import getRouter from './router';

import './assets/css/reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            {getRouter()}
        </Router>
    </div>
  );
}

export default App;
