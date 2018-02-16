import React from 'react'
import {Link} from 'react-router';

const ResultUnavailable = props => {
  const { passportValid } = props;
  return (
    <div className="container">
      <div className="col-sm-3 col-md-3"></div>
      <div className="col-sm-6 col-md-6">
      <div className="panel panel-default">
        <div className="panel-heading">
          <p>Oops! seems like you forgot to submit your image and passport!</p>
        </div>
        
        <div className="panel-body">
          {passportValid}
        </div>	
        <Link to={'/'} className="link"><button type="button" className="btn btn-primary">Back to Home</button></Link>		
      </div>
      </div>
      
      <div className="col-sm-3 col-md-3"></div>
    </div>
  )
}

export default ResultUnavailable;