import React, { Component } from 'react';
import './Contacts.css'; //



class Contacts extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <div className="contacts">
          <div className="inner">
            <a className="contacts__email" href="mailto:andryshapoval@gmail.com">andryshapoval@gmail.com</a>
            <div className="contacts__phone">+38 (068) - 328 - 85 - 41</div>
            <ul className="socialList">
              <li className="socialList__item">
                <a className="socialList__link socialList__link--fb" href="https://www.facebook.com/profile.php?id=100000914987526" target="_blank"></a>
              </li>
              <li className="socialList__item">
                <a className="socialList__link socialList__link--linkedin" href="https://www.linkedin.com/in/andrii-shapoval/" target="_blank"></a>
              </li>
              <li className="socialList__item">
                <a className="socialList__link socialList__link--behance" href="https://www.behance.net/shapovala85e0" target="_blank"></a>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Contacts;