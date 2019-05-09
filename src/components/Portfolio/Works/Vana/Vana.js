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
      'Technologies: SASS, Flexbox',
      'Cross-browser compatibility: IE10 +, Chrome, Firefox, Opera, Safari'
    ],
    visits: [
      {
        id: 0,
        anchor: 'http://en.dyadya-vanya.ru/',
        title: 'Index'
      },
      {
        id: 1,
        anchor: 'http://en.dyadya-vanya.ru/products',
        title: 'Catalog'
      },
      {
        id: 2,
        anchor: 'http://en.dyadya-vanya.ru/news',
        title: 'News'
      },
      {
        id: 3,
        anchor: 'http://en.dyadya-vanya.ru/recipes',
        title: 'Recipes'
      },
      {
        id: 4,
        anchor: 'http://en.dyadya-vanya.ru/brand',
        title: 'OUR BRAND'
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