import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">My works</h2>
                    <h3 className="section-subheading text-muted">I'm a dreamer and achiever dedicated to creating Awesome brands!! </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"> Designs made out of love</i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/a.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Quick Hires</h4>
                        <p className="text-muted">Mobile Web Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/02.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Scintilla Soft Inc.</h4>
                        <p className="text-muted">Website Design</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/03.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>NaaN-N-Curry</h4>
                        <p className="text-muted">Online Store</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/04.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Copper Chimney</h4>
                        <p className="text-muted">Brand Indentity</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/05.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>Shakor Decor</h4>
                        <p className="text-muted">Street Billboard</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={require('../img/portfolio/06.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                    <div className="portfolio-caption">
                        <h4>K groups</h4>
                        <p className="text-muted">Product Identity</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
      
    );
  }
}

export default Portfolio;