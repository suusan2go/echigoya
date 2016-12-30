import React from 'react';
import Helmet from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Home page" />
        Hello React HMR !!!!!!!!
      </div>
    );
  }
}

export default App;
