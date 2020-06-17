import React, { lazy, Suspense } from 'react';
import './App.css';
import NavBarComponent from './navbar';
import Jumbo from './Jumbotron';
import Container from 'react-bootstrap/Container';
const Registration = lazy(() => import('./registration')); 
const About = lazy(() => import('./about'));
const Footer = lazy(() => import('./footer'));
const Team = lazy(() => import('./team'));
const Vision = lazy(() => import('./vision'));

function App() {
  return (
      <Container fluid className = 'p-0 m-0 overflow-hidden'>
      <NavBarComponent/>
      <Jumbo/>
      <Suspense fallback = {<h1>Still Loading....</h1>}>
         <Vision/>
         <About/>
         <Registration/>
         <Team/>
         <Footer/>
      </Suspense>
      {/* <img src = {poster} alt = 'poster'className = 'img-fluid w-100'/> */}
      </Container>
   );
}

export default App;
