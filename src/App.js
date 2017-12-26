import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import ContactBar from './components/ContactBar';
import Experience from './components/Experience';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          <h1 className='title'>
            Hello, I'm Harry Chan
          </h1>
        */}
        <Navbar/>
        <Introduction/>
        <ContactBar/>
        <Experience/>
      </div>
    );
  }
}

export default App;
