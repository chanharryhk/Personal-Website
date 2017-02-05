import React from 'react';
import '../App.css'

export default class Greeting extends React.Component {
  render() {
    return (
      <div className="jumbotron col-md-12 text-center">
        <h1>Hey, I&#39;m Harry Chan</h1>
          <p>
            Front-end Developer.
            <br/>
            Tech Enthusiast.
            <br/>
            Computer Engineer.
          </p>
      </div>
    );
  }
}
