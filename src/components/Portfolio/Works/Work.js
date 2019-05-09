import React, { Component } from 'react';
import './Work.css'; 

class Work extends Component {
  render() {
    // You can use them as regular CSS styles
    const solutionstems = this.props.items.solutions.map((solution, index) =>
			<dd key={index} className="solutions-list__item">
        {solution}
			</dd>
    );

    const visitslistems = this.props.items.visits.map((visit) =>
			<dd key={visit.id} className="visits-list__item">
        <a href={visit.anchor}>
          {visit.title}
        </a>
			</dd>
    );
    
    return (
      <section className="work">
          <ul className="path">
            <li className="path__item">
              <a className="path__link" href="/">Home</a>/
            </li>
            <li className="path__item">
              <span className="path__name">{this.props.items.name}</span>
            </li>    
          </ul>
          <h1 className="work__name">{this.props.items.name} <i className="work__cat">{this.props.items.category}</i></h1>
          <figure className="work__pic">
            <img src={this.props.items.pic} alt={this.props.items.name} />
          </figure>
          <p className="work__task"><b>Task: </b>{this.props.items.task}</p>
          <dl className="solutions-list">
            <dt className="solutions-list__title">Solution:</dt>
            {solutionstems}
          </dl>
          <dl className="visits-list">
            <dt className="visits-list__title">Visit:</dt>
            {visitslistems}
          </dl>
      </section>
    );
  }
}

export default Work;