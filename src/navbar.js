import React, { Component } from 'react';
import prakharLogo from './assets/prakharLogo.jpg'
import './navbar.css';
import { Navbar,Nav } from 'react-bootstrap'
class NavBarComponent extends Component {
    render() {
        return (
            <Navbar expand="lg" className = 'prakhar-navbar fixed-top'>
            <Navbar.Brand href="#home"><img src= {prakharLogo} width = '80' height = '80' className = 'd-inline-block ml-4 mt-5' alt = 'logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home" className = "mx-3" id = "link">Mission</Nav.Link>
                <Nav.Link href="#link" className = "mx-3" id = "link">About</Nav.Link>
                <Nav.Link href="#link" className = "mx-3" id = "link">Event Registration</Nav.Link>
                <Nav.Link href="#link" className = "mx-3" id = "link">Team</Nav.Link>
                <Nav.Link href="#link" className = "ml-3 last-nav" id = "link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBarComponent;