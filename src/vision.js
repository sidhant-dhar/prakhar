import React, { Component } from 'react'
import './vision.css'
import { Row, Col } from 'react-bootstrap'
import talent from './assets/vision/talent.svg'
import identify from './assets/vision/identify.svg'
import activity from './assets/vision/activity.svg'


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
            <Row className = 'mt-4 pt-5 px-lg-4 px-2'>
                <Col className = 'col-lg-4 col-12'>
                    <img src = {identify} alt = 'talent' height = '70' width = '70'/>
                    <p className = 'mt-3'>Identify gifted children</p>
                </Col>
                
                <Col className = 'col-lg-4 col-12'>
                    <img src = {activity} alt = 'talent' height = '70' width = '70' className = 'how-it-works-image'/>
                    <p className = 'mt-3'>Optimise,refine and amplify their talents through specialised activities, stimulating their inner genius</p>

                </Col>
                <Col className = 'col-lg-4 col-12'>
                    <img src = {talent} alt = 'talent' height = '70' width = '70' className = 'how-it-works-image'/>
                    <p className = 'mt-3'>Produce children confident in their refined abilities, and thus better able to face the world and succeed</p>
                </Col>
            </Row>
            </div>
            </div>
            
        
        )
    }
}

export default Vision