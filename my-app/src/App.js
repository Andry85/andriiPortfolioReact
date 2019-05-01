import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';



class App extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}

export default App;
