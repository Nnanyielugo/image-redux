import * as types from './actionTypes';
import { browserHistory } from 'react-router'

/**
 * Action creators
 */

export function facesMatch(value) {
  return {type: types.FACES_DO_MATCH, value};
}

export function facesNotMatch(value){
  return {type: types.FACES_NOT_MATCH, value};
}

export function failedVerification(value) {
  return {type: types.FAILED_VERIFICATION, value};
}

export function errorState(){
  return {type: types.ERROR_STATE};
}


/**
 * Api call
 */
export function sendToApi(data){
  const request = new Request('http://45.55.44.21/ocr/compare', {
    method: 'POST',
    body: data
  })
  return fetch(request).then((res) => {
    console.log(res)
    return res.json();
  }).then((val) => {
    return val
  })
  .catch((error) => {
    error;
  });
}

/**
 * Thunk
 */

export function receiveApiResponse(data){
  return function(dispatch) {
    return sendToApi(data).then(value => {
      console.log(value)
      if(value.ocr.status == false && value.ocr.message == "Verification failed: Passport is either fake or not clear"){
        dispatch(failedVerification(value))
        browserHistory.push('/result');
      }
      if(value.recognition.message == 'faces match' && value.ocr.message == 'Passport Verified'){
        dispatch(facesMatch(value));
        browserHistory.push('/result');
      } else if(value.recognition.message == "faces don't match or not detected"){
        dispatch(facesNotMatch(value));
        browserHistory.push('/result');
      }  
    }).catch(error => {
      console.log(error)
      dispatch(errorState());
    })
  }
}

