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
  width: 900px;
  height: 300px;
  margin: 15% auto;
  left: 0;
  right: 0;
  color: white;
`;

const rainbowStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingLeft: '15px',
}

const backgroundVideo = {
  width: "100%",
  height: "103%",
  // float: "left",
  // top: 0,
  // padding: "none",
  // position: "absolute",// optional depending on what you wan
  // opacity: 1,
  opacity: 0.9,
}

const iframeBox = {
 width: "100%",
 height: "100%",
 position: "absolute",
 left: 0,
 top: 0,
 zIndex: -99,
}

const dotMatrix = {
  background: "url(http://s14.directupload.net/images/111129/44ga9qid.png)",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  position: "relative",
  overflowX: "hidden",
}

const test = {

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
      <section>
        <div style={dotMatrix}>
          <Introduction style={{zIndex: 2}}>
            <Title>Hello, I'm Harry Chan</Title>
            <Greeting/>
            <Title>Let's Build Something
                <span style={rainbowStyle} className="rainbow">Awesome</span>
            </Title>
          </Introduction>
          <div style={iframeBox}>
            <iframe style={backgroundVideo}
              src={this.state.videoURL} frameBorder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
            </iframe>
          </div>
        </div>
      </section>
    );
  }

}

export default introduction;
