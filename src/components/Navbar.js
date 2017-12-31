import React, {Component} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import etherIcon from '../images/ether.svg';
import { StyleSheet, css } from 'aphrodite';
import resume from '../Resume/Harry_Chan_Resume.pdf';

class Navbar extends Component {
    render() {
      return(
        <div className={css(styles.bar)}>
          <div className={css(styles.titleContainer)}>
                  {/*
                  <img src={etherIcon} style={styles.icon}/>
                  */}
                Blockchain Developer
          </div>
          <div className={css(styles.navigationContainer)}>
            <p className={css(styles.navigationItem)}>About Me</p>
            <p className={css(styles.navigationItem)}>Experience</p>
            <a href={resume} target="_blank">
              <p className={css(styles.navigationItem)}>Resume</p>
            </a>
            <p className={css(styles.navigationItem)}>Contact</p>
          </div>
        </div>
      );
    }
}

const styles = StyleSheet.create({
  bar: {
    position: 'fixed',
    color: 'white',
    padding: '25px',
    fontFamily: 'lato, sans-serif',
    fontWeight: '100',
    fontSize: '15px',
    width: '100%',
    backgroundColor: 'black',
    zIndex: '1',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: '1',

    '@media (max-width: 800px)': {
      justifyContent: 'center',
      width: 'auto'
    }
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px',

    '@media (max-width: 800px)': {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  navigationContainer: {
    display: 'flex',
    marginLeft: 'auto',
    textAlign: 'center',

    '@media (max-width: 800px)': {
      display: 'block',
      marginLeft: '0px',
    }
  },
  navigationItem: {
    display: 'inline-block',
    margin: '0px 20px 0px 20px',
    verticalAlign: 'middle',

    '@media (max-width: 800px)': {
      marginBottom: '5px',
      marginTop: '20px'
    }
  }

})

export default Navbar;
