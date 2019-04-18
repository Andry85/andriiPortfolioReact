import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header profileName ="ANDRII SHAPOVAL" profilePosition="UX/UI designer and Front-end Developer" />
        <div className="content">
          <div className="inner">
            <About/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
