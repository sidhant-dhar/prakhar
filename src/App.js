import React from 'react';
import './App.css';
import NavBarComponent from './navbar';
import Jumbo from './Jumbotron';
import Vision from './vision';
import Registration from './registration';
import Container from 'react-bootstrap/Container'
import About from './about';
import Footer from './footer';

function App() {
  return (
    <div className="">
      <Container fluid className = 'p-0'>
      <NavBarComponent/>
      <Jumbo/>
      {/* <Vision/> */}
      <About/>
      <Registration/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
