import React from 'react';
import Loading from './components/Loading/Loading';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Loading isLoading={true} />
      </div>
    );
  }
}

export default App;
