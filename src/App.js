import React, { Component } from 'react';
import './App.css';
import bgImage from './bgImage.jpg';
import './components/css/bootstrap.min.css';

import Header from './components/header/header';
import Previous from './components/prevDetails/previous';
import Current from './components/current/current';
import Pix from './components/pix/pix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

          <div className="row">
            <div className="col-md-6">
              <Previous />
            </div>
            <div className="col-md-6">
              <img className="img-one" src={bgImage} alt ="bgImage" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Current />
            </div>
            <div className="col-md-6">
              <Pix />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
