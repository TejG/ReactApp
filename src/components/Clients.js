import React, { Component } from 'react';


class Clients extends Component {
  render() {
    return (
        <section id="clients" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Our Clients</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis,<br/> quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</h3>
                </div>
            </div>

             <div className="row">
                <div className="col-md-3 col-sm-6">
                    <a target="_blank" rel="noopener noreferrer" href="http://cgi.tutsplus.com">
                        <img src={require('../img/logos/aetuts.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                </div>
                <div className="col-md-3 col-sm-6">
                    <a target="_blank" rel="noopener noreferrer" href="http://designmodo.com/">
                        <img src={require('../img/logos/designmodo.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                </div>
                <div className="col-md-3 col-sm-6">
                    <a target="_blank" rel="noopener noreferrer" href="https://wordpress.org/">
                        <img src={require('../img/logos/wordpress.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                </div>
                <div className="col-md-3 col-sm-6">
                    <a target="_blank" rel="noopener noreferrer" href="https://creativemarket.com">
                        <img src={require('../img/logos/creative-market.jpg')} className="img-responsive" alt="Quick hires"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Clients;