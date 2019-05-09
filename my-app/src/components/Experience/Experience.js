import React, { Component } from 'react';
import './Experience.css'; // Tell Webpack that Button.js uses these styles
import Jobs from '../Jobs/Jobs';
import Skills from '../Skills/Skills';

const experienceText = "I create web design, mobile app design, work with Figma, Adobe Photoshop, Adobe Illustrator. I can convert your web design into valid HTML5 and CSS3. Have experience of work with technologies: HTML5, CSS3, SASS, Javascript(jQuery, ReactJS), Wordpress, Twitter Bootstrap.";

class Experience extends Component {
  render() {
    // You can use them as regular CSS styles
    return (

    	<div className="experience">
        <section className="experience__col">
          <h3 className="experience__title">EDUCATION AND JOBS</h3>
          <div id="jobsBlock" className="jobsBlock">
            <Jobs/>
          </div>
        </section>
        <section className="experience__col">
          <h3 className="experience__title">WHAT I'M DOING</h3>
          <p className="experience__text">{experienceText}</p>
        </section>
        <section className="experience__col">
          <h3 className="experience__title">SKILLS AND ABILITIES</h3>
          <Skills/>
        </section>
      </div>
    );
  }
}

export default Experience;