import React, {Component} from 'react';
import './Introduction.css';

const styles = {
  intro: {
    paddingTop: '225px',
    left: '0',
    right: '0',
    color: 'white',
  },
  attributes:{

  },

}

const text = ['Software Developer @ ConsenSys', 'Computer Engineer', 'Blockchain Enthusiast'];

class Introduction extends Component {
  constructor(props){
     super(props);
     this.state = {
       count: 0,
     }
   }
   timer(){
     this.setState({count: this.state.count + 1})
     if (this.state.count > 2){
       this.setState({count: 0})
     }
   }
   componentDidMount() {
     this.intervalId = setInterval(this.timer.bind(this), 3000)
   }
   componentWillUnmount(){
     clearInterval(this.intervalId)
   }
    render() {
      const { count } = this.state;
      return(
        <div style={styles.intro}>
          <h1>Hi, I'm Harry Chan</h1>
          <h2 className='fade-in'>{text[count]}</h2>
        </div>
      );
    }
}

export default Introduction;
