import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Magisoft',
    category: 'Web design',
    pic: pic,
    task: 'Task: Create design for an IT company which creates web apps and smart things.',
    solutions: [
      'Tools: Adobe Photoshop, Adobe Illustrator'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://www.behance.net/gallery/77615793/Magisoft',
        title: 'Index'
      }
    ]
  };

class Magisoft extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Magisoft;