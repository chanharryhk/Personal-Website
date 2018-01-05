import React, {Component} from 'react';
import { Grid, Image, Divider,  Button, Icon} from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

import ethWaterloo from '../images/ethWaterloo.png';
import henry from '../images/henry.png';
import ecuador from '../images/ecuador.jpg';

const consensysNorthWebsite = 'https://consensystoronto.surge.sh';
const happyEthereum = 'https://github.com/happyethereum';

class Experience extends Component {
  render(){
    return(
      <div className={css(styles.container)}>

        {/* <--- ConsenSys ---> */}

        <div className={css(styles.title)}>
          <h1><i>Check out some of the stuff I've done!</i></h1>
        </div>
        <Grid stackable columns={2} reversed='mobile' className={css(styles.grid)}>
          <Grid.Column textAlign='right' verticalAlign='middle' className={css(styles.leftContainer)}>
            <h2>
              ConsenSys
            </h2>
            <Divider fitted='true' className={css(styles.leftDivider)}/>
            <br/><br/>
            <p className={css(styles.content)}>
              I had the pleasure of interning with <i>ConsenSys Toronto</i> this summer!
              <br/><br/>
              I am very fortunate to have been exposed to the crypto space and work
              so closely with the Ethereum protocol! I dabbled on some smart contract writing,
              as well as building some cool front-end React DApps!
              <br/><br/>
              Check out this website I built!
              <br/>
              <a href={consensysNorthWebsite} target='_blank'>
                consensystoronto.surge.sh
              </a>
            </p>
          </Grid.Column>
          <Grid.Column textAlign='left' className={css(styles.rightContainer)}>
            <Image size='large' rounded='true' wrapped='true' src={henry}/>
          </Grid.Column>
        </Grid>

          {/* <--- EthWaterloo ---> */}

          <Grid stackable columns={2} className={css(styles.grid)}>
            <Grid.Column textAlign='right' className={css(styles.leftContainer)}>
              <Image size='large' rounded='true' wrapped='true' src={ethWaterloo} />
            </Grid.Column>
            <Grid.Column textAlign='left' verticalAlign='middle' className={css(styles.rightContainer)}>
              <h2>EthWaterloo</h2>
              <Divider fitted='true' className={css(styles.rightDivider)}/>
              <br/><br/>
              <p className={css(styles.content)}>
                Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
                <br/><br/>
                This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
                <br/><br/>
                The repository is still growing even after the hackathon!
                <br/>
                <a href={happyEthereum} target='_blank'>
                  Happy-ENS
                </a>
              </p>
            </Grid.Column>
          </Grid>

          {/* <--- Me to We ---> */}

          <Grid stackable columns={2} reversed='mobile' className={css(styles.grid)}>
            <Grid.Column textAlign='right' verticalAlign='middle' className={css(styles.leftContainer)}>
              <h2>Me to We</h2>
              <Divider fitted='true' className={css(styles.leftDivider)}/>
              <br/><br/>
              <p className={css(styles.content)}>
                Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
                <br/><br/>
                This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
                <br/><br/>
                Pitches are 5 minutes + Q&A with judges.
              </p>
            </Grid.Column>
            <Grid.Column textAlign='left' className={css(styles.rightContainer)}>
              <Image size='large' rounded='true' wrapped='true' src={ecuador} />
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '25px 25px 50px 25px',
    color: 'black',
    backgroundColor: '#DEE6EE'
  },
  title: {
    display: 'table',
    margin: '0 auto',
    marginTop: '20px',
    maxWidth: '500px',
    padding: '20px',
  },
  grid:{
    paddingTop: '50px',
    maxWidth: '80%',
    textAlign: 'center',
    margin: 'auto',
    '@media (max-width: 800px)': {
      maxWidth: '100%'
    }
  },
  leftContainer: {
    paddingRight: '40px',
    // backgroundColor: 'blue',
  },
  rightContainer: {
    paddingLeft: '40px',
    // backgroundColor: 'red',
  },
  rightDivider: {
    backgroundColor: '#2B4055',
    height: '7px',
    width: '85%',
    float: 'left',
  },
  leftDivider: {
    backgroundColor: '#2B4055',
    height: '7px',
    width: '85%',
    float: 'right',
  },
  content:{
    fontSize: '15px',
  }
})

export default Experience;
