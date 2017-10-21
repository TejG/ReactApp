import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
        <div>
        	<section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            
                            <h3 className="section-subheading text-muted">|| A little you need to know about me ||</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="align-center">Web Designer</h2>
                        </div>
                        <div className="col-md-6">
                            <h2 className="align-center">Web Developer</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="p-about">I started my design career freelancing for the uprising industries, working on illustration briefs for bands, I had the pleasure of designing for some small scale industries and start-ups!</p>
                            <p className="span-about">Adobe Photoshop || Adobe Illustrator || Sketch || Vectr || Adobe After Effects </p>
                        </div>
                        <div className="col-md-6">
                            <p className="p-about">I started my developer career creating simple landing pages for start-ups, which inspired me to build complex websites including e-commerce websites, Single Page Applications(Angular & React) and many more.  </p>
                            <p className="span-about">HTML5 || CSS3 || JavaScript || BootStrap || jQuery || Greensock || React || Agular </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default About;