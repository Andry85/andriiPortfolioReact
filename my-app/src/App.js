import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Inner from './components/Inner/Inner';





class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/inner" component={Inner} />
      </Router>  
    );
  }
}

export default App;

