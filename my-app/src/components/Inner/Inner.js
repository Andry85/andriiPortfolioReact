import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import './Inner.css'; 
import Vana from '../Portfolio/Works/Vana/Vana';
import Obuff from '../Portfolio/Works/Obuff/Obuff';
import Mediawolf from '../Portfolio/Works/Mediawolf/Mediawolf';
import Magisogt from '../Portfolio/Works/Magisoft/Magisoft';
import Theformat from '../Portfolio/Works/Theformat/Theformat';
import Dobrze from '../Portfolio/Works/Dobrze/Dobrze';
import Befree from '../Portfolio/Works/Befree/Befree';
import Interfis from '../Portfolio/Works/Interfis/Interfis';
import Vitukraina from '../Portfolio/Works/Vitukraina/Vitukraina';
import Mehinvest from '../Portfolio/Works/Mehinvest/Mehinvest';



class Inner extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
 
        <div className="App">
          <Header />
          <div className="content">
            <div className="inner">
                <Route path='/inner/vana' component={Vana} />
                <Route path='/inner/obuff' component={Obuff} />
                <Route path='/inner/mediawolf' component={Mediawolf} />
                <Route path='/inner/magisoft' component={Magisogt} />
                <Route path='/inner/theformat' component={Theformat} />
                <Route path='/inner/dobrze' component={Dobrze} />
                <Route path='/inner/befree' component={Befree} />
                <Route path='/inner/interfis' component={Interfis} />
                <Route path='/inner/vitukraina' component={Vitukraina} />
                <Route path='/inner/mehinvest' component={Mehinvest} />
            </div>
            <Contacts/>
            <Footer/>
          </div>
        </div>
    
    );
  }
}

export default Inner;