import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import MediaBar from './components/MediaBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
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
        <MediaBar/>
        <AboutMe/>
        <Experience/>
        <ContactMe/>
      </div>
    );
  }
}

export default App;
