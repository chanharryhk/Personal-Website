import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <App />
   </MuiThemeProvider>
  </Provider>
  ,document.getElementById('root')
);
