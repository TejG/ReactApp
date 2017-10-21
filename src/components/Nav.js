import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
        <div>
        	    <nav id="mainNav" className="navbar navbar-custom navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> + <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Consulting Guru</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top">.</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#services">Services</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#clients">Clients</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">Hi, I am TEJA!</div>
                <div className="intro-heading">Web Designer and Devloper</div>
            </div>
        </div>
    </header>
        </div>
    );
  }
}

export default Nav;