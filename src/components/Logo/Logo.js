import React, { Component } from 'react';
import './Logo.css'; // Tell Webpack that Button.js uses these styles

class Logo extends Component {
  render() {
    // You can use them as regular CSS styles
    return (

    	<a className="logo" href="/">
            <span className="logo__name">A</span>
        </a>
    );
  }
}

export default Logo;