import React, { Component } from 'react';
import './about.css';
import { Row, Col } from 'react-bootstrap';
import about1 from './assets/about/aboutus.jpg'
import about2 from './assets/about/abt-us.jpg'
import about3 from './assets/about/abtus.jpg'
class About extends Component {
    render() {
        return (
            <div className = 'text-center m-4 about'>
            <h1 className = 'mt-5'>About Prakhar</h1>
            <p className = 'mx-lg-5 mx-3'>A registered non-profit non-government organization (NGO) based in Delhi, work with top Indian experts / professionals / specialists with varied interests &amp; expertise in the field of education. We are guided by a Governing Body composed of experienced Indian academicians and administrators. Guided by a group of educationists, social scientists and engineers aspiring to identify, nurture special talents in educational institutions while working with key education stakeholders like students, principals, and parents &amp; channelize them in structured form on Pan India basis. We work with various educational institutions on a long-term basis &amp; through our various methodologies &amp; programs as we provide the opportunities to India’s brightest &amp; brilliant minds to break social &amp; economic barriers to realize their real &amp; full potential.</p>
            <p className = 'mx-lg-5 mx-3'>The Founders with their vast experience / exposure had keenly observed that most of the genuine Talent in various educational institutions in India never gets even a chance to prove themselves due to poor socio-economic situations along with absence of relevant resources. Even those who possessed the aptitude and desire to reach greater heights, but could not do so because of lack of infrastructure, on-time guidance counselling and / or financial restrictions. And so, PRAKHAR was created to help &amp; act as a catalyst to facilitate optimal opportunities to such students through a comprehensive program that supports such talented brains to relive their dream.</p>
            <Row>
                <Col className = 'd-none d-md-flex align-items-stretch '><img src = {about3} alt = 'about us' className = 'w-100'/></Col>
                <Col className = 'd-none d-md-flex align-items-stretch'><img src = {about1} alt = 'about us' className = 'w-100'/></Col>
                <Col className = 'd-none d-md-flex align-items-stretch'><img src = {about2} alt = 'about us' className = 'w-100'/></Col>
            </Row>
            </div>
        )
    }
}
export default About;