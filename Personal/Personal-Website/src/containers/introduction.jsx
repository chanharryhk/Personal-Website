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
 background: "url(http://s14.directupload.net/images/111129/44ga9qid.png)",
 width: "100%",
 height: "100%",
 position: "absolute",
 left: 0,
 top: 0,
 zIndex: -99,
}

const iframeBlocker = {
	position: "absolute",
	top: 0,
	left: 0,
	width:"100%",
	height:"100%",
	zIndex: 2
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
      <div>
        <Introduction style={{zIndex: 2}}>
          <Title>Hello, I'm Harry Chan</Title>
          <Greeting/>
          <Title>Let's Build Something
              <span style={rainbowStyle} className="rainbow">Awesome</span>
          </Title>
        </Introduction>
				<div style={iframeBox}>
					<div style={iframeBlocker}></div>
					<iframe style={backgroundVideo}
						src={this.state.videoURL} frameBorder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
					</iframe>
				</div>
    	</div>
    );
  }

}

export default introduction;
