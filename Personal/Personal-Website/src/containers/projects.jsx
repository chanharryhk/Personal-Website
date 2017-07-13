import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Vault from '../images/vault.png';
import Particles from 'react-particles-js';

const cardStyle = {
  backgroundColor: "#1DE9B6",
}

const cardTextStyle = {
  color: "#696969",
}

const imageStyle = {
  verticalAlign: "middle",
}

const paperStyle = {
  height: 300,
  width: 396,
  margin: 10,
  align: 'center',
  textAlign: 'center',
  display: 'inline-block',
};


class contactMe extends Component{
  render(){
    return(
      <div>
        <Card style={cardStyle}>
          <CardText>
            <CardTitle title="Projects" titleColor="white" style={{textTransform: "uppercase",}}/>
            <Paper style={paperStyle} zDepth={4} rounded={true}>
              <h1 style={cardTextStyle}>Ethereum</h1>
              <br/>
              <a href="https://carbonx-tokens.surge.sh">
                <img src="https://image.flaticon.com/icons/svg/138/138201.svg" alt="Vault" height="100" width="100"/>
              </a>
              <br/>
              <h1 style={cardTextStyle}>Carried Interest</h1>
            </Paper>
            <Paper style={paperStyle} zDepth={4} rounded={true}>
              <h1 style={cardTextStyle}>T-Shirt</h1>
              <br/>
              <a href="https://github.com/chanharryhk/TShirt-Voting">
                <img src="https://image.flaticon.com/icons/svg/363/363222.svg" alt="Smiley face" height="100" width="100"/>
              </a>
              <br/>
              <h1 style={cardTextStyle}>Tokens</h1>
            </Paper>
            <Paper style={paperStyle} zDepth={4} rounded={true}>
              <h1 style={cardTextStyle}>This Website</h1>
              <br/>
              <a href="https://harrychan.surge.sh">
                <img src="https://image.flaticon.com/icons/svg/174/174249.svg" alt="Smiley face" height="100" width="100"/>
              </a>
              <br/>
              <h1 style={cardTextStyle}>About Me</h1>
            </Paper>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default contactMe;
