import React, { PropTypes } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <section className="container">
            <a className="navigation-title" href="">
              <h1 className="title">Milligram</h1>
            </a>
          </section>
        </nav>
      </div>
    );
  }
}

export default Header;
