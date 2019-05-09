import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Obuff',
    category: 'Front-end',
    pic: pic,
    task: 'Task: Create responsive layout from PSD.',
    solutions: [
      'Type: adaptive',
      'Task manager: Gulp',
      'Sprites: PNG',
      'Technologies: SASS, BEM, Flexbox',
      'Cross-browser compatibility: IE9 +, Chrome, Firefox, Opera, Safari'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://andry85.github.io/portfolio/obuff-html/',
        title: 'Index'
      },
      {
        id: 1,
        anchor: 'https://andry85.github.io/portfolio/obuff-html/catalog.html',
        title: 'Catalog page'
      },
      {
        id: 2,
        anchor: 'https://andry85.github.io/portfolio/obuff-html/shoppingcart.html',
        title: 'Shopping cart'
      },
      {
        id: 3,
        anchor: 'https://andry85.github.io/portfolio/obuff-html/myacc.html',
        title: 'My account'
      }
    ]
  };

class Obuff extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Obuff;