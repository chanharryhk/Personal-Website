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
  width: "100%",
  height: "15%",
  position: "absolute",
  display: "block",
  paddingTop: "35px",
  paddingBottom: "20px",
}

const iconContainerStyle = {
  zIndex: 100,
  display: 'inline-block',
  width: "25%",
  verticalAlign: 'middle',
}
const iconStyle = {
  display: "block",
  margin: "auto",
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
            <img style={iconStyle} src={githubIcon} alt="github" height="75" width="75"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="https://www.linkedin.com/in/harry-chan-629003134/">
            <img style={iconStyle} src={linkedinIcon} alt="" height="75" width="75"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="mailto:chanharryhk@gmail.com">
            <img style={iconStyle} src={mailboxIcon} alt="" height="75" width="75"/>
          </a>
        </div>
        <div style={iconContainerStyle}>
          <a href="https://open.spotify.com/user/shado_blade/playlist/1IkRf0Wb0ZG60yODbKFXl7">
            <img style={iconStyle} src={spotifyIcon} alt="mail" height="75" width="75"/>
          </a>
        </div>
      </div>
    );
  }
}

export default contactBar;
