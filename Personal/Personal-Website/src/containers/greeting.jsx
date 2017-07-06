import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

let counter = 2;
let id;
let idHold = 0;

const Title = styled.h1`
	font-size: 1.5em;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
`;

class greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAttribute: "Computer Engineer",
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (counter === 15){
      counter = 1;
    }else{
      counter += 1;
      id = Math.round(counter / 5);
      if (id === 0){
        id = 3;
      }
      id -= 1;
      if (id !== idHold){
        this.setState({
          currentAttribute: this.props.attributes[id].description
        });
        idHold = id;
      }
    }
  }

  render(){
    return(
      <Title>{this.state.currentAttribute}</Title>
    );
  }
}


function mapStateToProps(state){
  return{
    attributes: state.attributes
  }
}

export default connect(mapStateToProps)(greeting);
