import React, { Component } from 'react';
import './Footer.css'; //



class Footer extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <div className="footer">
          <p className="footer__text">© 2019. All rights reserved. Copying of site materials is prohibited.</p>
      </div>
    );
  }
}

export default Footer;