import React, { Component } from 'react';
import Slider from "react-slick";
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from './img/001.jpg';
import pic2 from './img/002.jpg';
import pic3 from './img/003.jpg';
import pic4 from './img/004.png';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="testimonials__item">
              <figure className="testimonials__pic">
                <img src={pic1} alt=""/>
              </figure>
              <p className="testimonials__text">A good performer, quickly and well performed the task, well done!</p>
              <h3 className="testimonials__author">Vladimir</h3>
          </div>
        </div>
        <div>
          <div className="testimonials__item">
              <figure className="testimonials__pic">
                <img src={pic2} alt=""/>
              </figure>
              <p className="testimonials__text">Thanks to Andrew. Quickly and efficiently executed the layout of two designs!</p>
              <h3 className="testimonials__author">Sergey Smirnov</h3>
          </div>
        </div>
        <div>
          <div className="testimonials__item">
              <figure className="testimonials__pic">
                <img src={pic3} alt=""/>
              </figure>
              <p className="testimonials__text">Successfully closed the project with Andrey, everything was done on time, additionally small wishes were made on my part! Andrei has an excellent code, I recommend it to everyone as an artist!</p>
              <h3 className="testimonials__author">Sergey Rufer</h3>
          </div>
        </div>
        <div>
          <div className="testimonials__item">
              <figure className="testimonials__pic">
                <img src={pic4} alt=""/>
              </figure>
              <p className="testimonials__text">Work (layout and wordpress template) was done on time and efficiently. Thank. Until next time.</p>
              <h3 className="testimonials__author">Andrey Ivanov</h3>
          </div>
        </div>
      </Slider>
    );
  }
}


class Testimonials extends Component {
  
  
  render() {
    // You can use them as regular CSS styles
    
    return (
    	<section className="testimonials">
          <h2 className="testimonials__subtitle">- Testimonials -</h2>
          <div className="testimonials__slider">
            <SimpleSlider/>
          </div>
          
      </section>    
    );

  }
}

export default Testimonials;