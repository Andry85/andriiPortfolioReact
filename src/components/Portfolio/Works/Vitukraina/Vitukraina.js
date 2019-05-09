import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Vitukraina',
    category: 'Wordpress',
    pic: pic,
    task: "Create a website for 'VIT-UKRAINE' company which specializes in the production and implementation of road's bitumen emulsion.",
    solutions: [
      'Tools: Sublime Text, Adobe Photoshop, Adobe Illustrator, WAMP, Filezilla.'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://vitukraina.com.ua/en/home/',
        title: 'vitukraina.com.ua'
      }
    ]
  };

class Vitukraina extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Vitukraina;