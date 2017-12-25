import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import etherIcon from '../images/ether.svg';
// import './Navbar.sass';

const styles = {
  bar: {
    position: 'fixed',
    color: 'white',
    padding: '20px',
    fontFamily: 'lato, sans-serif',
    fontWeight: '100',
    fontSize: '15px',
    width: '100%',
  },
  leftBarContainer: {
    display: 'inline-block',
  },
  rightBarContainer: {
    display: 'inline-block',
    marginLeft: '30%'
  },
  icon: {
    height: '50px',
    width: '50px',
    verticalAlign: 'middle',
  },
  tabs: {
    display: 'inline-block',
    margin: '5px 25px 5px 25px',
  }

}
/*
list: {
  listStyle: 'none',
  textAlign: 'center',
},
tabs: {
  verticalAlign: 'middle',
},
<ul style={styles.list}>
  <li style={styles.tabs}><img src={etherIcon} style={styles.icon}/></li>
  <li style={styles.tabs}>Blockchain Developer</li>
  <li style={styles.tabs}>Blockchain Developer</li>
</ul>
*/
class Navbar extends Component {
    render() {
      return(
        <div style={styles.bar}>
          <div style={styles.leftBarContainer}>
            <h1 style={styles.tabs}>
                  {/*
                  <img src={etherIcon} style={styles.icon}/>
                  */}
                Blockchain Developer
            </h1>
          </div>
          <div style={styles.rightBarContainer}>
            <p style={styles.tabs}>About</p>
            <p style={styles.tabs}>Projects</p>
            <p style={styles.tabs}>Resume</p>
            <p style={styles.tabs}>Contact</p>
          </div>
        </div>
      );
    }
}

export default Navbar;
