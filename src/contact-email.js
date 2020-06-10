import React, { Component } from 'react';
import './contact-email.css';
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap'


class Contact extends Component {


    state = {
        name: '',
        email:'',
        phone:'',
        message:''
    }

    handleChange = (param , event) => {
        this.setState({[param] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let templateParams = {
          user_name: this.state.name,
          user_email: this.state.email,
          user_phone: this.state.phone,
          message: this.state.message
        }

        emailjs.send(
          'prakhar_gmail',
          'contact_form',
           templateParams,
          'user_fYkv2y8bUWwiVBdwQJNBN'
         ).then((result) => {
           console.log(result.text);
                 // Email successfully sent alert
                 Swal.fire({
                  title: 'Email Successfully Sent',
                  icon: 'success'
                })
         })
         .catch(err => {
          Swal.fire({
            title: 'Email Failed to Send',
            icon: 'error'
          })
          console.error('Email Error:', err)
         });
        this.resetform();
    }

    resetform = () => {
        this.setState({
            name: '',
            email:'',
            phone:'',
            message:''
        })
    }


    render() {
        return (
            <Form className = 'form-wrapper mt-lg-4 mt-2' onSubmit = {this.handleSubmit}>
            <Form.Group className = 'form-inliner'>
              <Form.Label className = 'form-label'>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder = 'Name'
                className="form-input mb-lg-4 mb-2"
                aria-describedby="Name"
                onChange = {this.handleChange.bind(this, 'name')}
              />
            </Form.Group>
            <Form.Group className = 'form-inliner'>
              <Form.Label className = 'form-label'>Email </Form.Label>
              <Form.Control
                type="text"
                className="form-input mb-lg-4 mb-2"
                placeholder = 'Email'
                aria-describedby="Email"
                onChange = {this.handleChange.bind(this, 'email')}
              />
            </Form.Group>
            <Form.Group className = 'form-inliner'>
              <Form.Label className = 'form-label'>Phone</Form.Label>
              <Form.Control
                type="text"
                className="form-input mb-lg-4 mb-2"
                placeholder = 'Phone'
                aria-describedby="Phone"
                onChange = {this.handleChange.bind(this, 'phone')}
              />
            </Form.Group >
            <Form.Group className = 'form-inliner'>
                <Form.Label className = 'form-label' id = 'contact-textarea'>Message</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder = 'Message' onChange = {this.handleChange.bind(this, 'message')} 
                className="form-input"/>
            </Form.Group>
              <div className = 'form-label'></div> {/*Use this to skip a table cell */}
            <Button variant="dark" type="submit" className = 'contact-button mt-lg-4 mt-2 mb-5'>
                Submit
            </Button>
          </Form>
            )
    }
}

export default Contact;