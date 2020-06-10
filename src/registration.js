import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './registration.css'

class Registration extends Component {
    render() {
        return (
            <div className = "registration mb-0">
            <div className = 'registration-content text-center'>
            <h1 className = 'mx-lg-5 mx-3'>PRAKHAR</h1>
            <p className = 'mx-lg-5 mx-3 mb-lg-5 mb-3' id='announces'>
                Announces
            </p>
            <h2 className = 'mx-lg-5 mx-3 mb-2'>FUN CREATING INTELLIGENT ACTIVITIES</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>1.PRAKHAR</span> Online Quiz Contest</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>2.PRAKHAR</span> National Online Poster Making Contest</h2>
            <h2 className = 'mx-lg-5 mx-3 font-weight-bold mb-2'><span>3.PRAKHAR</span> National Online Slogan Writing Contest</h2>
            <div className = 'registration-box w-50 mx-auto mt-5 p-4 text-center'>
                <h2>Registration Started</h2>
                <p>No Registration Fees</p>
                <Button href="#" className = 'register-button mx-auto px-5'>Register</Button>
            </div>
            </div>
            </div>
        )
    }
}

export default Registration;