import React, { Component } from 'react';
import './Skills.css'; // Tell Webpack that Button.js uses these styles





class Skills extends Component {
	constructor(props) {
    super(props);
    this.state = {
			date: new Date("July 1, 2008 01:15:00").getFullYear(),
			alltime: new Date().getFullYear() - new Date("July 1, 2008 01:15:00").getFullYear()
		};
  }
  render() {
		// You can use them as regular CSS styles
		const skills = [
			{
				id: 1,
				mainskills: 'HTML/CSS',
				otherskills: '(html5, css3, sass, bootstrap)',
				duration: new Date().getFullYear() - this.state.date
			},
			{
				id: 2,
				mainskills: 'Javascript',
				otherskills: '(jquery, react js)',
				duration: new Date().getFullYear() - new Date("July 1, 2017 01:15:00").getFullYear()
			},
			{
				id: 3,
				mainskills: 'UX/UI design',
				otherskills: '(web design, mobile app design)',
				duration: new Date().getFullYear() - new Date("January 1, 2018 01:15:00").getFullYear()
			}
		];
		const skillsItems = skills.map((skill) =>
			<li key={skill.id} className="skill-list__item">
				<div className="skill-list__progress">
					<span className="skill-list__procents" style={{width: 100 * skill.duration / this.state.alltime +'%'}}></span>
				</div>
				<div className="skill-list__inner">
						<h4 className="skill-list__mainskills">{skill.mainskills}</h4>
						<span className="skill-list__duration">{skill.duration} years</span>
				</div>
				<p className="skill-list__otherskills">{skill.otherskills}</p>
			</li>
		);
    return (
    	<ul className="skill-list">
    		{skillsItems}
    	</ul>
    );
  }
}

export default Skills;