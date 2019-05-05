import React, { Component } from 'react';
import './Clients.css'; //

import client_1 from './img/001.png';
import client_2 from './img/002.png';
import client_3 from './img/003.png';

class Clients extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <section className="clients">
          <h2 className="clients__subtitle">- Clients -</h2>
          <div className="inner">
            <ul className="clientsList">
              <li className="clientsLis__item">
                <img src={client_1} alt=""/>
              </li>
              <li className="clientsLis__item">
                <img src={client_2} alt=""/>
              </li>
              <li className="clientsLis__item">
                <img src={client_3} alt=""/>
              </li>
            </ul>
          </div>
      </section>
    );
  }
}

export default Clients;