import React, { Component } from 'react';
import Greeting from './components/greeting';
import Scroll from './layout/scroll';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting/>
        <Scroll/>
      </div>
    );
  }
}

export default App;
