import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./react-tabs.css";
import './Portfolio.css'; // Tell Webpack that Button.js uses these styles
import vana from './img/vana-thumb.jpg';
import obuff from './img/obuff-thumb.jpg';
import mediawolf from './img/mediawolf-thumb.jpg';
import magisoft from './img/magisoft-thumb.jpg';
import theformat from './img/theformat-thumb.jpg';
import dobrze from './img/dobrze-thumb.jpg';
import befree from './img/befree-thumb.png';
import interfis from './img/interfis-thumb.jpg';
import vitukraina from './img/vitukraina-thumb.jpg';
import mehinvest from './img/mehinvest-thumb.jpg';







class Portfolio extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  
  render() {
    // You can use them as regular CSS styles
    return (
        <section className="portfolio">
            <h2 className="portfolio__subtitle">- My portfolio -</h2>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList>
                <Tab>Web design</Tab>
                <Tab>Front-end</Tab>
                <Tab>Mobile App Design</Tab>
                <Tab>Wordpress</Tab>
              </TabList>
              <TabPanel>
                  <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/magisoft'}>
                        <img src={magisoft} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Web design</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/magisoft'}>Magisoft</Link></h3>
                  </div>
                  <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/theformat'}>
                        <img src={theformat} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Web design</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/theformat'}>The format</Link></h3>
                  </div>
                  <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/dobrze'}>
                        <img src={dobrze} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Web design</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/dobrze'}>Dobrze</Link></h3>
                  </div>
              </TabPanel>
              <TabPanel>
              <div className="portfolioItem">
                  <figure className="portfolioItem__pic">
                    <Link to={'/inner/vana'}>
                      <img src={vana} alt=""/>
                    </Link>
                  </figure>
                  <span className="portfolioItem__cat">Front-end</span>
                  <h3 className="portfolioItem__name"><Link to={'/inner/vana'}>Uncle Vanya</Link></h3>
                </div>
                <div className="portfolioItem">
                  <figure className="portfolioItem__pic">
                    <Link to={'/inner/obuff'}>
                      <img src={obuff} alt=""/>
                    </Link>
                  </figure>
                  <span className="portfolioItem__cat">Front-end</span>
                  <h3 className="portfolioItem__name"><Link to={'/inner/obuff'}>obuff</Link></h3>
                </div>
                <div className="portfolioItem">
                  <figure className="portfolioItem__pic">
                    <Link to={'/inner/mediawolf'}>
                      <img src={mediawolf} alt=""/>
                    </Link>
                  </figure>
                  <span className="portfolioItem__cat">Front-end</span>
                  <h3 className="portfolioItem__name"><Link to={'/inner/mediawolf'}>mediawolf</Link></h3>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/befree'}>
                        <img src={befree} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Mobile App Design</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/befree'}>Be free</Link></h3>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/interfis'}>
                        <img src={interfis} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Wordpress</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/interfis'}>Interfis</Link></h3>
                </div>
                <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/vitukraina'}>
                        <img src={vitukraina} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Wordpress</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/vitukraina'}>Vitukraina</Link></h3>
                </div>
                <div className="portfolioItem">
                    <figure className="portfolioItem__pic">
                      <Link to={'/inner/mehinvest'}>
                        <img src={mehinvest} alt=""/>
                      </Link>
                    </figure>
                    <span className="portfolioItem__cat">Wordpress</span>
                    <h3 className="portfolioItem__name"><Link to={'/inner/mehinvest'}>Mehinvest</Link></h3>
                </div>
              </TabPanel>
            </Tabs>
        </section>
    );
  }
}



export default Portfolio;