import React, { Component } from 'react';
import Header from './components/Header';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>API Integrat</h2>
              <Login />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
