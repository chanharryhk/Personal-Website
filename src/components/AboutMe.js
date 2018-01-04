import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';

const styles = {
  container: {
    paddingTop: '25%',
    color: 'white',
  }
}

class ContactBar extends Component {
  render(){
    return(
      <div style={styles.container}>
        <Grid centered columns={2}>
          <Grid.Column>
            <h1>About Me</h1>
            <p>
              I'm a Computer Engineer at Queen's University!
            </p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ContactBar;
