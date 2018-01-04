import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

import qhacks from '../images/qhacks.png'

class ContactBar extends Component {
  render(){
    return(
      <div className={css(styles.container)}>
        <h1>About Me</h1>
        <p className={css(styles.content)}>
          I'm a Computer Engineer at studying at Queen's University!
          <br/><br/>
          Catch me <i>coding</i> away at on a ĐApp
          <br/>
          or
          <br/>
          Staring at Coinmarketcap.com
        </p>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '250px 0px 75px 0px',
    color: 'white',
  },
  content: {
    fontSize: '20px'
  },
})

export default ContactBar;
