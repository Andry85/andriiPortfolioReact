import React, { Component } from 'react';
import Work from './../Work';
import pic from './img/001.jpg';


const info = {
    name: 'Mehinvest',
    category: 'Wordpress',
    pic: pic,
    task: "Create a website for 'MEKH INVEST' which specializes in the manufacture and sale of traffic management tools",
    solutions: [
      'Tools: Sublime Text, Adobe Photoshop, WAMP, Filezilla.'
    ],
    visits: [
      {
        id: 0,
        anchor: 'http://mehinvest.com.ua/ru/o-kompanii/',
        title: 'mehinvest.com.ua'
      }
    ]
  };

class Mehinvest extends Component {
  render() {
    return (
      <div>
        <Work items={info}/>
      </div>
    );
  }
}

export default Mehinvest;