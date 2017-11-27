import React from 'react';
import './row.css';
import './../../../css/bootstrap.min.css';
import './../../../css/font-awesome.min.css';
import Button from '../button/button';



const Row = (props) => {
  return (
    <div className="botton-sect">
      <div className="row">
        {props.rowVals.map(i => {
              return (<div className="col-md-3" key={i}>
                        <Button value={i}/>
                      </div>);
            })}
      </div>
    </div>
  );
}

export default Row;
