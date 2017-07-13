import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chat from '../images/chatContact.png';
import Globe from '../images/globeContact.png';
import Map from '../images/mapContact.png';

const cardStyle = {
  backgroundColor: "#C2185B",
}

const cardTextStyle = {
  color: "white",
}

const imageStyle = {
  verticalAlign: "middle",
}

class contactMe extends Component{
  render(){
    return(
      <div>

        <Card style={cardStyle}>
          <CardText style={cardTextStyle}>
            <CardTitle title="Contact Me" titleColor="white" />
            <ul style={{listStyle: "none"}}>
              <li>
                <img style={imageStyle} src={Map} alt="Map" height="50" width="50"/>
                Toronto, ON
              </li>
              <li>
                <img style={imageStyle} src={Chat} alt="Email" height="50" width="50"/>
                chanharryhk@gmail.com
              </li>
              <li>
                <img style={imageStyle} src={Globe} alt="Globe" height="50" width="50"/>
                http://harrychan.surge.sh/
              </li>
            </ul>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default contactMe;
