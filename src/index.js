import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <div className='stars'></div>
    <div className='stars2'></div>
    <div className='stars3'></div>
  </div>
  ,document.getElementById('root')
);
registerServiceWorker();
