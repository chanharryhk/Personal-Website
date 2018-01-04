import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';


class ContactMe extends Component{
  render(){
    return(
    <div className={css(styles.container)}>
      <h1>Contact Me</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    color: 'white',
    textAlign: 'left',
    marginTop: '50px',
    padding: '50px',
  }
});
export default ContactMe;
