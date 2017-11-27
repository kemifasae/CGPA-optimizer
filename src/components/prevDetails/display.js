import React, {Component} from 'react';
import './previous.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

export default class Display extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm=(event)=>{
    this.setState({confirmed: true})
    event.preventDefault();
  }

  render(){
    return (
      <div>
        {!this.state.confirmed &&
        <div>
          <h2>Please Confirm the Details you have Submitted </h2>
            <ul className="list-group">
              <li className="list-group-item">Current Units: {this.props.currentUnits}</li>
              <li className="list-group-item">Previous Units: {this.props.prevUnits}</li>
              <li className="list-group-item">Expected CGPA: {this.props.expectedCGPA}</li>
              <li className="list-group-item">Previous CGPA: {this.props.prevCGPA}</li>
              <li>
                &nbsp;
                &nbsp;
                <div>
                  <button><span className="fa fa-paper-plane" aria-hidden="true" onClick={this.handleConfirm}>Confirm</span></button>
                </div>
              </li>
            </ul>
          </div>
        }
        {
        this.state.confirmed && <div>What I Want to Render</div>
      }
      </div>
    );
  }
}
