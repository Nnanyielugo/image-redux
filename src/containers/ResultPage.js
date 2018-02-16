import React, {Component} from 'react';

import { connect } from 'react-redux';


import '../result.css'
import ResultDisplay from '../components/ResultDisplay';
import ResultUnavailable from '../components/ResultUnavailable';

class ResultPage extends Component {
	render(){
		const {api_response, passport_valid, passport_details, response, none_available} = this.props;

		if (api_response) {
			return(
					<ResultDisplay  
						givenNames={api_response.ocr.given_names}
						Message={api_response.ocr.message}
						Rate={api_response.ocr.rate}
						Surname={api_response.ocr.surname}
						passportDetails={passport_details} 
						Response={response}
						noneAvailable={none_available} />
			)
		} else {
			return (
					<ResultUnavailable passportValid={passport_valid}/>		
			)
		} 
			
	}
}

const mapStateToProps = state => ({
	passport_valid: state.passport_valid,
	passport_details: state.passport_details,
	response: state.response,
	api_response: state.api_response,
	none_available: state.none_available
});

export default connect(mapStateToProps)(ResultPage);