import React, {Component} from 'react';
import { Grid, Image, Divider} from 'semantic-ui-react';

import ethWaterloo from '../images/ethWaterloo.png';

const styles = {
  container: {
    paddingTop: '20%',
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
    padding: '50px 0px'
  },
  leftText: {
    color: 'white',
    padding: '0px 50px 0px 150px',
  },
  rightText: {
    color: 'white',
    padding: '0px 150px 0px 50px',
  },
}
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
            <h2>EthWaterloo</h2>
            <Divider/>
            <p>
              Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
              <br/><br/>
              This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
              <br/><br/>
              Pitches are 5 minutes + Q&A with judges.
            </p>
          </Grid.Column>
          <Grid.Column textAlign='left'>
            <Image size='large' rounded='true' wrapped='true' src={ethWaterloo} />
          </Grid.Column>
        </Grid>

          {/* <--- EthWaterloo ---> */}

          <Grid stackable columns={2} style={styles.grid}>
            <Grid.Column textAlign='right'>
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
                Pitches are 5 minutes + Q&A with judges.
              </p>
            </Grid.Column>
          </Grid>

          {/* <--- Me to We ---> */}

          <Grid stackable columns={2} style={styles.grid}>
            <Grid.Column textAlign='right' verticalAlign='middle' style={styles.leftText}>
              <h2>EthWaterloo</h2>
              <Divider/>
              <p>
                Join us in Toronto on ConsenSys Blockchain <b>Pitch Night</b>!
                <br/><br/>
                This is an interactive and fun pitch event where entrepreneurs showcase their ideas or companies to ConsenSys, get valuable feedback and compete for a chance get seed funding.
                <br/><br/>
                Pitches are 5 minutes + Q&A with judges.
              </p>
            </Grid.Column>
            <Grid.Column textAlign='left'>
              <Image size='large' rounded='true' wrapped='true' src={ethWaterloo} />
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Experience;
