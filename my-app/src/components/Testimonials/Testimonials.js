import React, { Component } from 'react';
import Slider from "react-slick";
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from './img/001.jpg';

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
                <img src={pic1} alt=""/>
              </figure>
              <p className="testimonials__text">A good performer, quickly and well performed the task, well done!</p>
              <h3 className="testimonials__author">Vladimir</h3>
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