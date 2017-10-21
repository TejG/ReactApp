import React, { Component } from 'react';
import './css/agency.css';
import './vendor/bootstrap/css/bootstrap.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioContent from './components/Portfoliocontent';




class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <About />
      <Portfolio />
      <Services />  
      <Clients />
      <Contact />
      <Footer />
      <PortfolioContent />
      </div>
    );
  }
}

export default App;
