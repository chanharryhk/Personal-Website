import React, {Component} from 'react';
import githubIcon from '../images/githubIcon.png';
import mailboxIcon from '../images/mailboxIcon.png';
import spotifyIcon from '../images/spotifyIcon.png';
import linkedinIcon from '../images/linkedinIcon.png';

const iconBarStyle = {
  zIndex: 3,
  backgroundColor: "#f4c20d",
  fontFamily: "Helvetica Neue, Arial ,sansSerif",
  left: 0,
  height: "15%",
  display: "flex",
  verticalAlign: "center",
}

const iconContainerStyle = {
  zIndex: 100,
  margin: "auto",
  // backgroundColor: "blue",
}
const iconStyle = {
  // backgroundColor: "yellow",
}

class contactBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAttribute: "Computer Engineer",
    };
  }
  render(){
    return(
      <div style={iconBarStyle}>
        <div style={iconContainerStyle}>
          <a href="https://github.com/chanharryhk">
            <img style={iconStyle} src={githubIcon} alt="github" height="60" width="60"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="https://www.linkedin.com/in/harry-chan-629003134/">
            <img style={iconStyle} src={linkedinIcon} alt="linkedin" height="60" width="60"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="mailto://chanharryhk@gmail.com">
            <img style={iconStyle} src={mailboxIcon} alt="mail" height="60" width="60"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="https://open.spotify.com/user/shado_blade/playlist/1IkRf0Wb0ZG60yODbKFXl7">
            <img style={iconStyle} src={spotifyIcon} alt="spotify" height="60" width="60"/>
          </a>
        </div>
      </div>
    );
  }
}



export default contactBar;
