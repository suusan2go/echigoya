import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Home page" />
        <Link to="/gifts">
          Hello React HMR !!!!!!!!
        </Link>
      </div>
    );
  }
}

export default App;
