import React, {Component} from 'react';
import { Grid, Image, Divider} from 'semantic-ui-react';

import ethWaterloo from '../images/ethWaterloo.png';
import henry from '../images/henry.png';
import ecuador from '../images/ecuador.jpg';

const styles = {
  container: {
    paddingTop: '100px',
  },
  title: {
    display: 'table',
    margin: '0 auto',
    marginTop: '20px',
    color: 'white',
    maxWidth: '500px',
    padding: '20px',
  },
  grid:{
    padding: '50px 0px',
    maxWidth: '80%',
    textAlign: 'center',
    margin: 'auto',
  },
  leftText: {
    color: 'white',
  },
  rightText: {
    color: 'white',
  },
}
const consensysNorthWebsite = 'https://consensystoronto.surge.sh';
const happyEthereum = 'https://github.com/happyethereum';

class Experience extends Component {
  render(){
    return(
      <div style={styles.container}>

        {/* <--- ConsenSys ---> */}

        <div style={styles.title}>
          <h2><i>Check out some of the stuff I've done!</i></h2>
        </div>
        <Grid stackable columns={2} style={styles.grid}>
          <Grid.Column textAlign='right' verticalAlign='middle' style={styles.leftText}>
            <h2>
              ConsenSys
            </h2>
            <Divider/>
            <p>
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
          <Grid.Column textAlign='center'>
            <Image size='large' rounded='true' wrapped='true' src={henry} />
          </Grid.Column>
        </Grid>

          {/* <--- EthWaterloo ---> */}

          <Grid stackable columns={2} style={styles.grid}>
            <Grid.Column textAlign='center'>
              <Image size='large' rounded='true' wrapped='true' src={ethWaterloo} />
            </Grid.Column>
            <Grid.Column textAlign='left' verticalAlign='middle' style={styles.rightText}>
              <h2>EthWaterloo</h2>
              <Divider/>
              <p>
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

          <Grid stackable columns={2} style={styles.grid}>
            <Grid.Column textAlign='right' verticalAlign='middle' style={styles.leftText}>
              <h2>Me to We</h2>
              <Divider/>
              <p>
                Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
                <br/><br/>
                This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
                <br/><br/>
                Pitches are 5 minutes + Q&A with judges.
              </p>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Image size='large' rounded='true' wrapped='true' src={ecuador} />
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Experience;
