import React, {Component} from 'react';
import pylon from '../images/pylon.png'

const projectBarStyle = {
  zIndex: 3,
  backgroundColor: "#FF6D00",
  fontFamily: "Helvetica Neue, Arial ,sansSerif",
  left: 0,
  height: "100%",
  textAlign: "center",
}
const titleStyle = {
  color: "white",
  fontWeight: 400,
  fontSize: "2.5em",
  textTransform: "uppercase",
}

class projects extends Component{
  render(){
    return(
      <section>
        <div style={projectBarStyle}>
          <h1 style={titleStyle}>Projects</h1>
          <h1>Website Still Under Construction</h1>
          <h3>Check out my Github to see what I've been up to for now!</h3>
          <img src={pylon} alt="github" height="75" width="75"/>

        </div>
      </section>
    );
  }
}

export default projects;
