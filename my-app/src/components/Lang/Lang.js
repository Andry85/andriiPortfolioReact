import React, { Component } from 'react';
import './Lang.css'; // Tell Webpack that Button.js uses these styles


import { ReactComponent as UkFlag } from './img/united-kingdom.svg';
import { ReactComponent as RusFlag } from './img/russia.svg';
import { ReactComponent as UaFlag } from './img/ukraine.svg';

const sources = [
	{
		id: 1,
		flag: <UkFlag />,
		url: '/uk'
	},
	{
		id: 2,
		flag: <RusFlag />,
		url: '/rus'
	},
	{
		id: 3,
		flag: <UaFlag />,
		url: '/ua'
	}
];

class Lang extends Component {
  render() {
    // You can use them as regular CSS styles
	const listItems = sources.map((source) =>
	  <li key={source.id} className="lang-list__item">
	  	<a className="lang-list__link" href={source.url}>
	  		{source.flag}
	  	</a>
	  </li>
	);
    return (
    	<ul className="lang-list">
    		{listItems}
    	</ul>
    );
  }
}

export default Lang;