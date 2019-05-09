import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.png';


const info = {
    name: 'Be free',
    category: 'Mobile App Design',
    pic: pic,
    task: 'Create design concept of a Mobile App which can help everyone to overcome addictions as alcohol, smoking, playing computer games, drugs, porno, wacthing tv and other.',
    solutions: [
      'Tools: Figma'
    ],
    visits: [
      {
        id: 0,
        anchor: 'https://www.behance.net/gallery/78838185/BE-FREE',
        title: 'Index'
      }
    ]
  };

class Befree extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Befree;