import React, { PropTypes } from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img
            src="img/osx-el-capitan.jpg"
            className="img-responsive"
          />
        </div>
        <div className="card-header">
          <h4 className="card-title">Microsoft</h4>
          <h6 className="card-meta">
            Software and hardware
          </h6>
        </div>
        <div className="card-body">
          To make a contribution to the world by making tools for the mind that advance humankind.
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Do</button>
        </div>
      </div>
    );
  }
}

export default Card;
