import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Magisoft',
    category: 'Web design',
    pic: pic,
    task: 'Create design for an amazing studio of painting which teaches people drawing.',
    solutions: [
      'Tools: Adobe Photoshop, Adobe Illustrator'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://www.behance.net/gallery/77913427/THE-FORMAT',
        title: 'Index'
      }
    ]
  };

class Theformat extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Theformat;