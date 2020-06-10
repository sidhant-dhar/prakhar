import React from 'react';
import './App.css';
import NavBarComponent from './navbar';
import Jumbo from './Jumbotron';
import Vision from './vision';
import Registration from './registration';
import Container from 'react-bootstrap/Container'
import About from './about';
import Footer from './footer';
import Team from './team';
import poster from './assets/poster.jpeg'

function App() {
  return (
      <Container fluid className = 'p-0 m-0 overflow-hidden'>
      <NavBarComponent/>
      <Jumbo/>
      <Vision/>
      <About/>
      <Registration/>
      <img src = {poster} alt = 'poster'className = 'img-fluid w-100'/>
      <Team/>
      <Footer/>
      </Container>
   );
}

export default App;
