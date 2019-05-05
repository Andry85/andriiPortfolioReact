import React, { Component } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Clients from '../Clients/Clients';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import './Home.css'; // Tell Webpack that Button.js uses these styles

class Home extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <div className="App">
        <Header profileName ="ANDRII SHAPOVAL" profilePosition="UX/UI designer and Front-end Developer" />
        <div className="content">
          <div className="inner">
            <About/>
            <Experience />
            <Portfolio/>
            <Testimonials/>
          </div>
          <div className="breakBlock"></div>
          <Clients/>
          <Contacts/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;