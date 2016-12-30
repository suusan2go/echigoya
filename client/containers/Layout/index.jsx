import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import '!style-loader!css-loader!less-loader!spectre.css/spectre.less'; // eslint-disable-line
import Header from 'components/layouts/Header';
import styles from './layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(Layout);
