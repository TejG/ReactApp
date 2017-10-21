import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">Copyrights TejaDesigns</span>
                </div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li><a href="#">Meet me for a coffee</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;