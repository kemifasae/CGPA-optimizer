import React from 'react';
import './buttonSect.css';
import './../../css/bootstrap.min.css';
import './../../css/font-awesome.min.css';
import Row from './row/row';

const buttonSect = (props) => {
  return (
    <ul className="col-md-12 list-group">
      {<Row rowVals={[7,8,9,'C']}/>}
      {<Row rowVals={[4,5,6,'>-']}/>}
      {<Row rowVals={[1,2,3,'bks']}/>}
      {<Row rowVals={['-<',0,'.','=']}/>}

    </ul>
  );
}

export default buttonSect;


