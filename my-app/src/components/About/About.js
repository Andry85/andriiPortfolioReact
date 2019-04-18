import React, { Component } from 'react';
import './About.css'; // Tell Webpack that Button.js uses these styles

class About extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <section className="about">
          <h2 className="about__subtitle">- About me -</h2>
          <p className="about__text">I’m an web designer and front-end developer from Vinnytsia, Ukraine with 11 years of experience as a Front-end developer and 1 year of experience as an UX/UI Designer.</p>
      </section>
    );
  }
}

export default About;