import React, { Component } from 'react';
import prakharLogo from './assets/prakharLogo.jpeg'
import './navbar.css';
import { Navbar,Nav } from 'react-bootstrap'
class NavBarComponent extends Component {

  state = {
    navBackground : false
  }

    navigate(param) {
      const classAdder = '.' + param;
      const anchor = document.querySelector(classAdder);
     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  
    }

    componentDidMount() {
 
      document.addEventListener("scroll", () => {
        const backgroundcolorBool = window.scrollY < 120 ? false : true;
        this.setState({ navBackground: backgroundcolorBool });
      });
    }

    render() {
       let classNav = this.state.navBackground ? 'fixed-top prakhar-navbar-scrolled navbar-dark navbar-expand-md' : 'prakhar-navbar fixed-top navbar-dark navbar-expand-md'

        return (
          <Navbar expand="lg" className = {classNav}>
            <Navbar.Brand href="#home" onClick = {this.navigate.bind(this, 'jumbo')}><img src= {prakharLogo} width = '80' height = '80' className = 'd-inline-block ml-4 mt-5' alt = 'logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto float-right text-right custom-toggler">
                <Nav.Link href="#vision" className = "mx-3" id = "link" onClick = {this.navigate.bind(this, 'vision')}>Mission</Nav.Link>
                <Nav.Link href="#about" className = "mx-3" id = "link" onClick = {this.navigate.bind(this, 'about')}>About</Nav.Link>
                <Nav.Link href="#event" className = "mx-3" id = "link" onClick = {this.navigate.bind(this, 'registration')}>Event Registration</Nav.Link>
                <Nav.Link href="#team" className = "mx-3" id = "link" onClick = {this.navigate.bind(this, 'team-wrapper')}>Team</Nav.Link>
                <Nav.Link href="#contact" className = "ml-lg-3 mx-3 last-nav" id = "link" onClick = {this.navigate.bind(this, 'contact')}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBarComponent;