import React, { Component } from 'react';
import './Header.css'; // Tell Webpack that Button.js uses these styles
import Logo from '../Logo/Logo';
import Lang from '../Lang/Lang';
import avatar from './img/avatar.png';

class Header extends Component {
  render() {
    // You can use them as regular CSS styles
    return (

    	<header className="header">
    		<div className="inner">
    			<div className="header__top">	
	    			<Logo />
	    			<Lang />
				</div>
				<div className="header__desc">	
	    			<div className="header__cong">HELLO</div>
	    			<div className="header__present">I’M</div>
	    			<h1 className="header__title">{this.props.profileName}</h1>
	    			<h2 className="header__position">{this.props.profilePosition}</h2>
				</div>
    		</div>
    		<img className="header__avatar" src={avatar} alt="null" />	
    	</header>
    );
  }
}

export default Header;