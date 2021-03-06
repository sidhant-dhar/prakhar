import React, { Component } from 'react';
import './team.css';
import { Row, Col } from 'react-bootstrap';
import sanjay from './assets/team/SanjayDhar.jpg';
import jnbaliya from './assets/team/JNBaliya.jpg';
import nirmohi from './assets/team/nirmohiUncle.jpg';
import dlitt from './assets/team/dlittphD.jpeg';

class Team extends Component {
  render() {
    return (
      <div className="text-center team-wrapper mt-lg-5 mt-3">
        <h1>The Leadership Team</h1>
        <p>
          Know the people who lead team PRAKHAR to achieve the vision &amp;
          goals
        </p>
        <Row className="w-75 mx-auto team-horizontal mt-4">
          <Col className="col-md-3 col-12">
            <img
              src={sanjay}
              alt="team member: Sanjay Dhar"
              className="img-fluid"
            />
          </Col>
          <Col className="col-md-9 col-12 text-left team-member mb-4">
            <h5>Sanjay Dhar</h5>
            <p className="team-member-role">Founder And Managing Trustee</p>
            <p className="team-member-description">
              Prakhar was founded in Delhi by Mr.Sanjay Dhar, an Engineer by
              profession with industry experience of more than 30 years at
              National &amp; International levels
            </p>
          </Col>
        </Row>

        <Row className="w-75 mx-auto mt-4">
          <Col className="col-md-4 col-12">
            <Row>
              <Col className="col-12">
                <img
                  src={nirmohi}
                  alt="team member: Nirmohi"
                  className="img-fluid"
                />
              </Col>
              <Col className="col-12 text-left team-member mb-4">
                <h5>Padma Shree Prof. Shiv Nirmohi</h5>
                <p className="team-member-role">Member: Advisory Board </p>
                <p className="team-member-description">
                  J.N.Baliya, an educationist &amp; pioneer in the field of
                  education with 33 years of long experience in teaching at
                  universities under the phrase “Kindling Brilliant Minds”.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-4 col-12">
            <Row>
              <Col className="col-12">
                <img
                  src={dlitt}
                  alt="team member: D.Lit PhD"
                  className="img-fluid"
                />
              </Col>
              <Col className="col-12 text-left team-member mb-4">
                <h5>Dr. Mrityunjay Sharma D.Lit Ph.D. Music</h5>
                <p className="team-member-role">Member: Advisory Board </p>
                <p className="team-member-description">
                  J.N.Baliya, an educationist &amp; pioneer in the field of
                  education with 33 years of long experience in teaching at
                  universities under the phrase “Kindling Brilliant Minds”.
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="col-md-4 col-12">
            <Row>
              <Col className="col-12">
                <img
                  src={jnbaliya}
                  alt="team member: JN Baliya"
                  className="img-fluid"
                />
              </Col>
              <Col className="col-12 text-left team-member mb-4">
                <h5>J.N Baliya</h5>
                <p className="team-member-role">Member: Advisory Board </p>
                <p className="team-member-description">
                  J.N.Baliya, an educationist &amp; pioneer in the field of
                  education with 33 years of long experience in teaching at
                  universities under the phrase “Kindling Brilliant Minds”.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Team;
