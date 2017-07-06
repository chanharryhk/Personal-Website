import React, {Component} from 'react';
import Greeting from './greeting.jsx';
import styled from 'styled-components';

import '../App.css';

const Title = styled.h1`
	font-size: 2.5em;
  font-weight: 200;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
`;

const Introduction = styled.div`
  text-align: center;
  position: absolute;
  width: 900px;
  height: 200px;
  margin: 10% auto;
  left: 0;
  right: 0;
  zIndex: 2;
`;

const rainbowStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingLeft: '15px',
}

const backgroundVideo = {
  width: "100%",
  height: "100%",
  float: "left",
  top: 0,
  padding: "none",
  position: "absolute",// optional depending on what you wan
  zIndex: 1,
  opacity: .50,
}
const sectionStyle = {
  overflowX: "hidden"
}

class introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoURL: "https://www.youtube.com/embed/bZKfyTcdXrQ?autoplay=1&modestbranding=1&wmode=transparent&controls=0&showinfo=0&rel=0&loop=1&playlist=bZKfyTcdXrQ",
    }
  }
  render(){
    return(
      <div style={sectionStyle}>
        <Introduction>
          <Title>Hello, I'm Harry Chan</Title>
          <Greeting/>
          <Title>Let's Build Something
              <span style={rainbowStyle} className="rainbow">Awesome</span>
          </Title>
        </Introduction>
        {/*



        <iframe style={backgroundVideo}
          src={this.state.videoURL} frameBorder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
        </iframe>
        */}
      </div>

    );
  }

}

export default introduction;
