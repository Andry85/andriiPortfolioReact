import React, { Component } from 'react';
import './Jobs.css'; // Tell Webpack that Button.js uses these styles



const jobs = [
	{
		id: 1,
		time: '11.2018 – 05.2019',
		company: 'Magisale Inc',
		position: 'Front-end Developer and UI/UX Designer'
	},
	{
		id: 2,
		time: '10.2017 – 10.2018',
		company: 'Prostosite.vn.ua',
		position: 'CEO of Prostosite.vn.ua'
	},
	{
		id: 3,
		time: '04.2017 – 10.2017',
		company: 'eXdst',
		position: 'Front End Developer'
	},
	{
		id: 4,
		time: '08.2016 – 03.2017',
		company: 'Freelancer',
		position: 'Front End Developer'
	},
	{
		id: 5,
		time: '11.2013 – 07.2016',
		company: 'OptionRally',
		position: 'Front End Developer'
	},
	{
		id: 6,
		time: '09.2009 – 10.2013',
		company: 'Freelancer',
		position: 'Front End Developer'
	},
	{
		id: 7,
		time: '07.2008 – 08.2009',
		company: 'Allsoft',
		position: 'HTML Coder'
	}
];

class Jobs extends Component {
  render() {
		
    // You can use them as regular CSS styles
	const jobsItems = jobs.map((job) =>
	  <li key={job.id} className="jobs-list__item">
			<b className="jobs-list__time">{job.time}</b>
			<h4 className="jobs-list__company">{job.company}</h4>
			<p className="jobs-list__position">{job.position}</p>
	  </li>
	);
    return (
    	<ul className="jobs-list">
    		{jobsItems}
    	</ul>
    );
  }
}

export default Jobs;
