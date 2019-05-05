import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import './Inner.css'; 
import Work_1 from '../Portfolio/Works/Work_1/Work_1';
import Work_2 from '../Portfolio/Works/Work_2/Work_2';

class Inner extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
 
        <div className="App">
          <Header />
          <div className="content">
            <div className="inner">
                <Route path='/inner/work_1' component={Work_1} />
                <Route path='/inner/work_2' component={Work_2} />
            </div>
            <Contacts/>
            <Footer/>
          </div>
        </div>
    
    );
  }
}

export default Inner;