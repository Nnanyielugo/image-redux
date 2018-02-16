import React from 'react';
import {Link} from 'react-router';

const ResultDisplay = props => {
  const {givenNames, Message, Rate, Surname, Response, passportDetails, noneAvailable} = props;
  return(
    <div className="container">
      <div className="col-sm-3 col-md-3"></div>
      <div className="col-sm-6 col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{Response}</h3>
          </div>
          
          <div className="panel-body">
            {passportDetails}
            <h5><strong>Given Names:&nbsp;</strong>{givenNames || noneAvailable}</h5>
            <p><strong>Message:&nbsp;</strong>{Message}</p>
            <h6><strong>Rate:&nbsp;</strong><i>{Rate || noneAvailable}</i></h6>
            <p><strong>Surname:&nbsp;</strong>{Surname || noneAvailable}</p>
          </div>	
          <Link to={'/'} className="link"><button type="button" className="btn btn-primary">Back to Home</button></Link>		
        </div>
      </div>
      <div className="col-sm-3 col-md-3"></div>
    </div>
  )
}

export default ResultDisplay;