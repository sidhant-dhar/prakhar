import React, { Component } from 'react';
import './footer.css';
import { Row, Col } from 'react-bootstrap';
import Contact from './contact-email';
import telephone from './assets/footer/Telephone.svg';
import mail from './assets/footer/Mail.svg';
import location from './assets/footer/Location.svg'

class Footer extends Component {
    render() {
        return (
            <div className = 'contact text-center'>
            <h1 className = 'footer-heading pt-4 mb-5'>Connect with Us</h1>
            <Row className = 'px-5 footer-bottom-line '>
                <Col className = 'col-lg-6 col-12'><Contact/></Col>
                <Col className = 'col-lg-6 col-12 vertical-line'>
                    <div className = 'row footer-info p-4 m-3'>
                        <h6 className = 'col-md-3 col-12'>Phone</h6>
                        <p className = 'col-md-9 col-12 text-left'>
                            <img src = {telephone} height = '16' width = '16' className = 'mr-3' alt = 'telephone icon'/>
                            +91 9911224333</p>
                    </div>
                    <div className = 'row footer-info p-4 m-3'>
                        <h6 className = 'col-md-3 col-12'>Mail</h6>
                        <p className = 'col-md-9 col-12 text-left'>
                            <img src = {mail} height = '16' width = '16' className = 'mr-3' alt = 'mail icon'/>
                            prakhar.kdm@gmail.com</p>
                    </div>
                    <div className = 'row footer-info p-4 m-3'>
                        <h6 className = 'col-md-3 col-12'>Location</h6>
                        <p className = 'col-md-9 col-12 text-left'>
                            <img src = {location} height = '16' width = '16' className = 'mr-3'alt = 'location icon'/>
                            Prakhar, A-4 / 38, Sector – 18, Rohini, Delhi – 110089 (India)</p>
                    </div>
                    
                </Col>
            </Row>
                <p className = 'mt-5 mb-0 pb-3 text-center copyright'>&copy; 2020 PRAKHAR All Rights Reserved</p>
            </div>
        )
    }
}

export default Footer;