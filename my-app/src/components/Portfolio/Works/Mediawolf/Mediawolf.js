import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Mediawolf',
    category: 'Front-end',
    pic: pic,
    task: 'Task: Create responsive layout from PSD.',
    solutions: [
      'Type: adaptive',
      'Task manager: Gulp',
      'Sprites: PNG',
      'Technologies: SASS, Flexbox',
      'Cross-browser compatibility: IE9 +, Chrome, Firefox, Opera, Safari'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://andry85.github.io/portfolio/progect0/',
        title: 'Index'
      }
    ]
  };

class Mediawolf extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Mediawolf;