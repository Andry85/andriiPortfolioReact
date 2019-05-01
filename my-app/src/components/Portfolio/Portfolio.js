import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./react-tabs.css";
import './Portfolio.css'; // Tell Webpack that Button.js uses these styles
import vana from './img/vana.png';







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
              <Tab>All</Tab>
              <Tab>Front-end</Tab>
              <Tab>Web design</Tab>
              <Tab>Mobile App Design</Tab>
              <Tab>Wordpress</Tab>
            </TabList>
            <TabPanel>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="portfolioItem">
                <figure className="portfolioItem__pic">
                  <a href="null">
                    <img src={vana} alt=""/>
                  </a>
                </figure>
                <span className="portfolioItem__cat">Front-end</span>
                <h3 className="portfolioItem__name"><a href="null">Uncle Vanya</a></h3>
              </div>
            </TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
            <TabPanel>5</TabPanel>
          </Tabs>
      </section>
    );
  }
}



export default Portfolio;