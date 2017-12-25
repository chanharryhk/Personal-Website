import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

import github from '../images/github.svg';
import linkedIn from '../images/linkedIn.svg';
import medium from '../images/medium.svg';
import mail from '../images/mail4.svg';

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
          <Image style={styles.icon} src={github} />
          <Image style={styles.icon} src={linkedIn} />
          <Image style={styles.icon} src={mail} />
          <Image style={styles.icon} src={medium} />
        </Image.Group>

      </div>
    );
  }
}

export default ContactBar
