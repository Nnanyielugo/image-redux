import React from 'react';
import * as types from '../actions/actionTypes';

const initialState = {
	passport_details: '',
	response: '',
	api_response: '',
	status: '',
  statusMsg1: '',
  statusMsg2: '',
  response: '',
  showModal: false,
  buttonText: 'Analyze',
	modalText: '',
	none_available: '',
	showModal: false
}

// Use Object.assign to return copy of state since rest operator throws error
function passport_valid_reducer (state = initialState, action)  {
	switch (action.type) {
		case types.FACES_DO_MATCH: {
			return Object.assign({}, state, {
				response : (<div className="success"><p><i className="fa fa-check" id="pass" aria-hidden="true">&nbsp;&nbsp;Passport and Passport-photograph matches!</i></p></div>),
				passport_details: (<h6><strong>Passport Details: </strong></h6>),
				api_response: action.value
			})
		}

		case types.FACES_NOT_MATCH: {
			return Object.assign({}, state, {
				response : (<div className="success"><p><i className="fa fa-times" id="no-pass" aria-hidden="true">&nbsp;&nbsp;Passport and Passport-photograph do not match!</i></p></div>),
				passport_details: (<h2><strong>Passport Details: </strong></h2>),
				api_response: action.value
			})
		}

		case types.FAILED_VERIFICATION: {
			return Object.assign({}, state, {
				response : (<div className="success"><p id="no-pass"><i className="fa fa-times" id="no-pass" aria-hidden="true"></i>&nbsp;&nbsp;Verification failed: Passport is either fake or not clear</p></div>),
				api_response: action.value,
				none_available: (<span className="red">None Available</span>)
			})
		}

		case types.ERROR_STATE: {
			return Object.assign({}, state, {
				showModal: true
			})
		}

		case types.CLOSE_MODAL: {
			return Object.assign({}, state, {
				showModal: false
			})
		}

		default: {
			return state;
		}
	}		
		
}

export default passport_valid_reducer;