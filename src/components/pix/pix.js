import React from 'react';
import './pix.css';
import './../css/bootstrap.min.css';
import './../css/font-awesome.min.css';
import immg from './bg1.jpg'

const Pix = () =>{
  return (
    <div>
      <img src={immg} alt="View Look" className="rounded-circle" />
    </div>
  );
}

export default Pix;

