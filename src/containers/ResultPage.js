import React, {Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import '../result.css'

class ResultPage extends Component {
	render(){
		const {api_response, passport_valid, passport_details} = this.props;

		if (api_response) {
			return(
				<div className="container">
					<div className="col-sm-3 col-md-3"></div>
					<div className="col-sm-6 col-md-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3>{this.props.response}</h3>
						</div>
						
						<div className="panel-body">
							{passport_details}
							<h5><strong>Given Names:&nbsp;</strong>{api_response.ocr.given_names || 'None Available'}</h5>
							<p><strong>Message:&nbsp;</strong>{api_response.ocr.message }</p>
							<h6><strong>Rate:&nbsp;</strong><i>{api_response.ocr.rate || 'None Available'}</i></h6>
							<p><strong>Surname:&nbsp;</strong>{api_response.ocr.surname  || 'None Available'}</p>
						</div>	
						<Link to={'/'} className="link"><button type="button" className="btn btn-primary">Back to Home</button></Link>		
					</div>
					</div>
					
					<div className="col-sm-3 col-md-3"></div>
				</div>
			)
		} else {
			return (
				<div className="container">
					<div className="col-sm-3 col-md-3"></div>
					<div className="col-sm-6 col-md-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<p>Oops! seems like you forgot to submit your image and passport!</p>
						</div>
						
						<div className="panel-body">
							{passport_valid}
						</div>	
						<Link to={'/'} className="link"><button type="button" className="btn btn-primary">Back to Home</button></Link>		
					</div>
					</div>
					
					<div className="col-sm-3 col-md-3"></div>
				</div>				
			)
		} 
			
	}
}

const mapStateToProps = state => ({
	passport_valid: state.passport_valid,
	passport_details: state.passport_details,
	response: state.response,
	api_response: state.api_response
});

export default connect(mapStateToProps)(ResultPage);