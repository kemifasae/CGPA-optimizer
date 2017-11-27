import React, { Component } from 'react';
import './current.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import DisplayBox from './displaybox/displaybox';
import ButtonSection from './buttonSect/buttonSect';

export default class Current extends Component {

  render() {
    return (
      <div className="current-details">
          <DisplayBox />
          <ButtonSection />
      </div>
    );
  }
}


