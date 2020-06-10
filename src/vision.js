import React, { Component } from 'react'
import './vision.css'
import { Row, Col } from 'react-bootstrap'
import talent from './assets/talent.svg'
import identify from './assets/identify.svg'
import activity from './assets/activity.svg'


class Vision extends Component {
    render() {
        return (
            
            <div className = "vision mb-0">
            <div className = 'vision-content text-center'>
            <h1 className = 'mx-lg-5 mx-3'>Our Mission</h1>
            <p className = 'mx-lg-5 mx-3 mb-lg-5 mb-3'>
            Help locate, nurture &amp; act as a catalyst for India’s brightest &amp; brilliant minds to break social &amp; economic barriers to realize their real &amp; full potential.
            </p>
            <h1 className = 'how-it-works'>How It Works</h1>
            <hr/>
            <Row className = 'mt-4'>
                <Col className = 'col-lg-4 col-12 how-it-works-image'>
                    <img src = {talent} alt = 'talent' height = '70' width = '70'/>
                    <p>Identify gifted children</p>
                </Col>
                
                <Col className = 'col-lg-4'>
                    <img src = {identify} alt = 'talent' height = '70' width = '70' className = 'how-it-works-image'/>
                </Col>
                <Col className = 'col-lg-4'>
                    <img src = {activity} alt = 'talent' height = '70' width = '70' className = 'how-it-works-image'/>
                </Col>
            </Row>
            </div>
            </div>
            
        
        )
    }
}

export default Vision