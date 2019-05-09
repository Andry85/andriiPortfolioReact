import React, { Component } from 'react';
import './Header.css';
import Logo from '../../Logo/Logo';

class Header extends Component {
  render() {
    // You can use them as regular CSS styles
    return (

    	<header className="header header--inner">
    		<div className="inner">
    			<div className="header__top">	
	    			<Logo />
					</div>
    		</div>
    	</header>
    );
  }
}

export default Header;