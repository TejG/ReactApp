import React, { Component } from 'react';


class Services extends Component {
  render() {
    return (
        <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dignissim ullamcorper.<br/>Sed ut orci rutrum, bibendum nisl a, bibendum massa.</h3>
                </div>
            </div>
            <div className="row top-margin-md">
                <div className="col-md-6">
                    <a href="https://dribbble.com/shots/819957-Imac-psd"><img src={require('../img/portfolio/07.png')} className="img-responsive" alt="Quick hires"/></a>
                </div>
                <div className="col-md-6">
                    <p className="before-header top-margin-lg">incredible websites</p>
                    <h2 className="section-heading">website development</h2>
                    <h3 className="section-subheading text-muted bottom-margin-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dignissim ullamcorper. Sed ut orci rutrum, bibendum nisl a, bibendum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dignissim ullamcorper. Sed ut orci rutrum, bibendum nisl a, bibendum massa.</h3>
                    <a href="#services" className="btn btn-xl">Learn More</a>
                </div>
            </div>

            <div className="row top-margin-lg hidden-sm hidden-xs">
                <div className="col-md-6">
                    <p className="before-header top-margin-lg">incredible websites</p>
                    <h2 className="section-heading">Mobile Design</h2>
                    <h3 className="section-subheading text-muted bottom-margin-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dignissim ullamcorper. Sed ut orci rutrum, bibendum nisl a, bibendum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dignissim ullamcorper. Sed ut orci rutrum, bibendum nisl a, bibendum massa.</h3>
                    <a href="#services" className="btn btn-xl">Learn More</a>
                </div>
                <div className="col-md-6">
                    <a href="https://dribbble.com/shots/1317713-iPad-Air-Template"><img src={require('../img/portfolio/08.png')} className="img-responsive" alt="Quick hires"/></a>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Services;