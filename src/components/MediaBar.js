import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

import github from '../images/github.svg';
import linkedIn from '../images/linkedIn.svg';
import medium from '../images/medium.svg';
import mail from '../images/mail4.svg';

const githubLink = 'https://github.com/chanharryhk';
const linkedInLink = 'https://www.linkedin.com/in/harrychan-eth';
const emailLink = 'mailto:chanharryhk@gmail.com';

const styles = {
  icon: {
    margin: '50px 25px 5px 25px',
  }
}
class ContactBar extends Component {
  render(){
    return(
      <div>
        <Image.Group size='tiny'>
          <a href={githubLink} target="_blank">
            <Image style={styles.icon} src={github} />
          </a>
          <a href={linkedInLink} target="_blank">
            <Image style={styles.icon} src={linkedIn} />
          </a>
          <a href={emailLink}>
            <Image style={styles.icon} src={mail} />
          </a>
          <Image style={styles.icon} src={medium} />

        </Image.Group>
      </div>
    );
  }
}

export default ContactBar
