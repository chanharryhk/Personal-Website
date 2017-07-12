import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import ConsenSysBackground from '../images/ConsenSysBackground.png';
import EcuadorBackground from '../images/EcuadorBackground.png';

const experienceBarStyle = {
  zIndex: 3,
  backgroundColor: "#0097aa",
  fontFamily: "Helvetica Neue, Arial ,sansSerif",
  left: 0,
  height: "100%",
  display: "flex",
  justifyContent: "center",
}

const titleStyle = {
  color: "white",
  fontWeight: 400,
  fontSize: "2.5em",
  textTransform: "uppercase",
}

class experience extends Component{
  constructor(props) {
  super(props);
  this.state = {
    value: 'a',
    };
  }
  handleChange = (value) => {
  this.setState({
    value: value,
    });
  };
  render(){
    return(
      <div>
      <div style={experienceBarStyle}>
        <h1 style={titleStyle}>Experience</h1>
      </div>
      <div >

        {/*
        <h1>Website Still Under Construction</h1>
        <img src={pylon} alt="github" height="75" width="75"/>
        */}


          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="ConsenSys" value="a">
              <div>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="Decentralized Application Intern" subtitle="Toronto, Canada | May 2017 - Present" />}>
                    <img src={ConsenSysBackground} alt="ConsenSysBackground" />
                  </CardMedia>
                  <CardText>
                    <ul>
                      <li>
                        Designed front-end web applications to interact with smart contracts deployed on the <b>Ethereum</b> blockchain
                      </li>
                      <li>
                        <b>Technologies Used:</b> React.js, Redux.js, Solidity.sol
                      </li>
                    </ul>
                  </CardText>
                </Card>
              </div>
            </Tab>
            <Tab label="Me To We" value="b">
              <div>
                <Card>
                  <CardMedia
                    overlay={<CardTitle title="International Volunteer" subtitle="Chimborazo, Ecuador | August 2015" />}>
                    <img src={EcuadorBackground} alt="EcuadorBackground" />
                  </CardMedia>
                  <CardText>
                    <ul>
                      <li>
                        Embarked on a 2 week journey to build schools for <b>100+</b> students, giving them opportunity to receive <b>Education</b> within their local Ecuadorian community
                      </li>
                      <li>
                        Raised awareness about <b>Water Scarcity</b> and <b>Endangerment of Women Rights</b> in Ecuador within my local community after
                      </li>
                    </ul>
                  </CardText>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

    );
  }
}

export default experience;
