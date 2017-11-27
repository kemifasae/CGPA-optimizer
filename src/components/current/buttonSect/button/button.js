import React from 'react';
import './button.css';
import './../../../css/bootstrap.min.css';
import './../../../css/font-awesome.min.css';

const Button = (props) =>{
  return (
    <button className = "butName">{props.value}</button>
  );
}

export default Button;

