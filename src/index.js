import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; //step 1

ReactDOM.render(
    <Router> 
        <App />
    </Router>, //step 2
document.getElementById('root'));


