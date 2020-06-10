import React, { Component } from 'react';
import './Jumbotron.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


class Jumbo extends Component {

    
    render() {
        return (
            <div>
            <Jumbotron className = "jumbo mb-0" fluid>
          
          </Jumbotron>
            <div className = 'jumbo-content'>
            <h1>PRAKHAR</h1>
            <p>
            A registered non-profit non-government organization (NGO) based in Delhi, work with top Indian experts / professionals / 
            specialists with varied interests &amp; expertise in the field of education.
            </p>
        </div>
        </div>
        )
    }
}

export default Jumbo;