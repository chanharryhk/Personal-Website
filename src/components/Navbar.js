import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import etherIcon from '../images/ether.svg';
import './Navbar.sass';

const styles = {
  bar: {
    position: 'fixed',
    color: 'white',
    padding: '30px',
    fontFamily: 'lato, sans-serif',
    fontWeight: '300',
    fontSize: '30px',
  },
  leftBarContainer: {
    display: 'inline-block',

  },
  icon: {
    height: '50px',
    width: '50px',
    verticalAlign: 'middle',

  },
  tabs: {
    verticalAlign: 'middle',
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
                <img src={etherIcon} style={styles.icon}/>
                Blockchain Developer
            </h1>
          </div>
        </div>
      );
    }
}

export default Navbar;
