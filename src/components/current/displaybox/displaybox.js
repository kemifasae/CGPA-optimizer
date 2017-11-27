import React, { Component } from 'react';
import './displaybox.css';
import './../../css/bootstrap.min.css';
import './../../css/font-awesome.min.css';

export default class DisplayBox extends Component {
  render() {
    return (
      <div className="curr-details">
        <label className="instruction">
          Previous Units
        </label>
        <br />
        <input className="form-control inputBox" type="text" placeholder="0" readOnly />
      </div>
    );
  }
}


