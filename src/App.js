import React, { Suspense } from 'react';
import './App.css';
import NavBarComponent from './navbar';
import Jumbo from './Jumbotron';
import Container from 'react-bootstrap/Container';
import Registration from './registration';
import About from './about';
import Footer from './footer';
import Team from './team';
import Vision from './vision';

function App() {
  return (
    <Container fluid className="p-0 m-0 overflow-hidden">
      <NavBarComponent />
      <Jumbo />
      <Suspense fallback={<h1>Still Loading....</h1>}>
        <Vision />
        <About />
        <Registration />
        <Team />
        <Footer />
      </Suspense>
      {/* <img src = {poster} alt = 'poster'className = 'img-fluid w-100'/> */}
    </Container>
  );
}

export default App;
