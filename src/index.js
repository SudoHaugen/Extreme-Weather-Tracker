import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from "./services/logservice";

logger.init();

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);