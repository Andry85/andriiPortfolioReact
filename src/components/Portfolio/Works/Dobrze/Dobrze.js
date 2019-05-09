import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Dobrze',
    category: 'Web design',
    pic: pic,
    task: 'Create design for a company which give job for ukranian people in european countries',
    solutions: [
      'Tools: Adobe Photoshop, Adobe Illustrator'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://www.behance.net/gallery/77615137/Dobrze',
        title: 'Index'
      }
    ]
  };

class Dobrze extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Dobrze;