import React from 'react';

export default class Volunteer extends React.Component {
  render() {
    return (
      <div className="jumbotron col-md-12">
        <div className="col-md-3 text-center">
          <h3>
            VOLUNTEER EXPERIENCE
          </h3>
        </div>
        <div className="col-md-6 col-sm-8">
          <h4>
            Me to We
          </h4>
          <ul>
            <li>Impacted lives of 100 students by giving them opportunity to receive education in Ecuador</li>
            <li>Ran school fundraiser and raised over $10,000 used to build schools in less fortunate countries</li>
            <li>Raised awareness about water scarcity and endangerment of women rights in Ecuador</li>
          </ul>
          <hr/>
        </div>
        <div className="col-md-3 col-sm-4 text-center">
          Aug 2015 - Sept 2015
          <br/>
          <img src="https://media.licdn.com/mpr/mpr/shrink_75_75/AAEAAQAAAAAAAAdoAAAAJDAxZTI5NjJmLWE2ZjMtNDk4MS1hMmI0LWNkMzJmMjRmYTcwMQ.png" alt="MetoWE"/>
        </div>
      </div>
    );
  }
}
