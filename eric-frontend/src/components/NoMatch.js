import React from 'react';
import './NoMatch.css';
import { Button } from 'reactstrap';

class NoMatch extends React.Component {
  render(){
    return (
      <div>
        <div className="noMatchHeading">
          <h1>Oh No!</h1>
          <h1>We can't find that page :(</h1>
        </div>
        <h3>Sorry for the inconvienience.</h3>
        <div className="noMatchContent">
          <p>Please check your URL and try again, or click the button bellow to return home.</p>
          <div className="noMatchButtonContainer">
            <Button className="noMatchButton">Take me home!</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoMatch;