import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
      <div>
        <App />
        {/*
          <div className='stars'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
          */}
      </div>
    </MuiThemeProvider>
  ,document.getElementById('root')
);
registerServiceWorker();
