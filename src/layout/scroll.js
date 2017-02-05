import React from 'react';
import Volunteer from '../information/volunteer';
import Education from '../information/education';

export default class Scroll extends React.Component {
  render() {
    return (
      <div>
        <Volunteer/>
        <Education/>
      </div>
    );
  }
}
