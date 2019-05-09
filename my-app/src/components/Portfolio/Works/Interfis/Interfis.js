import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Interfis',
    category: 'Wordpress',
    pic: pic,
    task: 'Create a website for an UK consulting company.',
    solutions: [
      'Tools: Sublime Text, Adobe Photoshop, WAMP, Filezilla.'
    ],
    visits: [
      {
        id: 0,
        anchor: 'http://www.interfis.com/',
        title: 'www.interfis.com'
      }
    ]
  };

class Interfis extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Interfis;