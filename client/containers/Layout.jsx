import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(Layout);
