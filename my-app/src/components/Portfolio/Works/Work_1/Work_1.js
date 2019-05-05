import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Vana',
    category: 'Front-end',
    pic: pic,
    task: 'Task: Create responsive layout from PSD.',
    solutions: [
      'Type: adaptive',
      'Task manager: Gulp',
      'Sprites: PNG',
      'Technologies: SASS, BEM, Flexbox',
      'Cross-browser compatibility: IE10 +, Chrome, Firefox, Opera, Safari'
    ],
    visits: [
      {
        id: 0,
        anchor: '#',
        title: 'Index page'
      },
      {
        id: 1,
        anchor: '#',
        title: 'Shop page'
      },
      {
        id: 1,
        anchor: '#',
        title: 'Catalog page'
      }
    ]
  };

class Work_1 extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Work_1;