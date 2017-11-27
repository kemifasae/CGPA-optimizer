import React, { Component } from 'react';
import './previous.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

import DisplayData from './display';

export default class Previous extends Component {
  constructor(props){
    super(props);

    this.state = {
      prevUnits: '',
      prevCGPA: '',
      expectedCGPA: '',
      currentUnits: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event, input){
    const value = event.target.value;
    switch(input) {
      case 'prevUnits':
        this.setState({ prevUnits: value});
        break;
      case 'prevCGPA':
        this.setState({ prevCGPA: value});
        break;
      case 'expectedCGPA':
        this.setState({ expectedCGPA: value});
        break;
      case 'currentUnits':
        this.setState({ currentUnits: value});
        break;
      default:
       this.setState({});
    }
  }

  handleSubmit=(event)=>{
    this.setState({submitted: true})
    event.preventDefault();
  }


  render() {
    return (
      <div>
        {!this.state.submitted &&
        <div className="prev-details">
          <h1 className="details-title">Your Previous Details are needed </h1>
          <br />
          <form className= "form-group" onSubmit={this.handleSubmit}>
            <div className="input-group">
              Previous Units &nbsp;
              <input type="text"
                className="form-control"
                placeholder="Previous Units"
                value={this.state.prevUnits}
                onChange={(e) => this.handleInputChange(e, 'prevUnits')}
                aria-label="Recipient's username" aria-describedby="basic-addon2"  />
              <span className="input-group-addon" id="basic-addon2">units</span>

            </div>
            <br />
            <div className="input-group">
              Previous CGPA&nbsp;
              <input type="text"
                className="form-control"
                value={this.state.prevCGPA}
                onChange={(e) => this.handleInputChange(e, 'prevCGPA')}
                placeholder="3.25"
                aria-label="Recipient's username" aria-describedby="basic-addon2"  />
            </div>
            <br />
            <div className="input-group">
              Expected CGPA&nbsp;<input type="text" className="form-control"
              value={this.state.expectedCGPA}
              onChange={(e) => this.handleInputChange(e, 'expectedCGPA')} placeholder="4.00" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
            </div>
            <br />
            <div className="input-group">
              Current Sessional units &nbsp;<input type="text"
                className="form-control"
                value={this.state.currentUnits}
               onChange={(e) => this.handleInputChange(e, 'currentUnits')}
                placeholder="Current Sessional units" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
              <span className="input-group-addon" id="basic-addon2">units</span>
            </div>
            <br />
            <div>
              <button><span className="fa fa-paper-plane" aria-hidden="true">Submit</span></button>
            </div>
          </form>
      </div>
      }

      {
        this.state.submitted && <DisplayData currentUnits={this.state.currentUnits} prevUnits= {this.state.prevUnits}
                                  expectedCGPA={this.state.expectedCGPA} prevCGPA={this.state.prevCGPA}
                                />
      }

      </div>

    );
  }
}


