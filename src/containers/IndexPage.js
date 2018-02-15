import React, { Component } from 'react';
import {Redirect} from 'react-router';
import _ from 'lodash';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { receiveApiResponse } from '../actions/actions'

let timer = '';

class IndexPage extends Component {
  constructor(props){
		super(props);
		this.state = {
      image: null,
      passport: null,
      image1PreviewUrl: '',
      image2PreviewUrl: '',
      status: '',
      statusMsg1: '',
      statusMsg2: '',
      style: {}, 
      isLoading: true,
      buttonText: '',
    };
    this.uploadFile1 = '';
    this.uploadFile2 = '';
    this.handleImage1Change = this.handleImage1Change.bind(this);
    this.handleImage2Change = this.handleImage2Change.bind(this);
    this.setOriginalText = this.setOriginalText.bind(this); 
    this.errorState = this.errorState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this)
  }

  componentWillMount(){
    this.setOriginalText();
  }

  formSubmitHandler(formData){
    this.setState({isLoading: true})
    // this.props.router.push('/result')
    if(!this.uploadFile1 || !this.uploadFile2){
      return;
    }
    let data = new FormData();
		data.append('image', this.uploadFile1);
    data.append('passport', this.uploadFile2);
    console.log(data)
    this.props.receiveApiResponse(data);
    this.updateState();
  }

 

  errorState(){
    this.setState({
      statusMsg1: (<div><p id='Nocheck'><i className="fa fa-times">&nbsp;Image not processed!<div>There might be a problem with your connection!</div></i></p></div>),
      statusMsg2: (<div><p id='Nocheck'><i className="fa fa-times">&nbsp;Image not processed!<div>There might be a problem with your connection!</div></i></p></div>),
      isLoading: true,
      showModal: true, 
      modalText: (<div><p id='Nocheck'><i className="fa fa-times">&nbsp;Image not processed!<div>There might be a problem with your connection!</div></i></p></div>),
      buttonText: 'Error!'
    });
  }

  updateState(){
    this.setState({        
      image1PreviewUrl: '',
      image2PreviewUrl: '',
      status: 'uploading',
      statusMsg1: (<div><p>Uploading...</p></div>),
      statusMsg2: (<div><p>Uploading...</p></div>),
      isLoading: true,
      buttonText: <div className="loader"></div>,
      uploadFile1: null,
      uploadFile2: null
  });
  }

  setOriginalText(){
    this.setState({
      status: 'idle', 
      statusMsg1: (<div><i className="fa fa-plus" aria-hidden="true"></i><p>Upload id card</p></div>), 
      statusMsg2: (<div><i className="fa fa-plus" aria-hidden="true"></i><p>Upload passport</p></div>),
      isLoading: true,
      response: (<div className="init"></div>),
      buttonText: 'Analyze',
      showModal: false
      });
  }

  handleImage1Change(e) {
    e.preventDefault();
    if (timer !== '') {
      clearTimeout(timer);
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        isLoading: false,
        image1PreviewUrl: reader.result,
        style: {background: ''}
      });
      this.uploadFile1 = file;
    }

    reader.readAsDataURL(file)
  }

  handleImage2Change(e) {
    e.preventDefault();
    if (timer !== '') {
      clearTimeout(timer);
    }
    let reader = new FileReader();
    let file = e.target.files[0];

    
    reader.onloadend = () => {
      this.setState({
        isLoading: false,
        image2PreviewUrl: reader.result,
        style: {background: ''}
      });
      this.uploadFile2 = file;
    }

    reader.readAsDataURL(file)
  }

  render(){
    let modalText = this.state.modalText;
    let buttonText = this.state.buttonText;
    let response = this.state.response;
	  let {image1PreviewUrl} = this.state;
    let {image2PreviewUrl} = this.state;

    let image1Preview = this.state.statusMsg1;
    let image2Preview = this.state.statusMsg2;

    if (image1PreviewUrl) {
      image1Preview = (<img src={image1PreviewUrl} className="dropPreview" alt=""/>);
    }
    if (image2PreviewUrl) {
      image2Preview = (<img src={image2PreviewUrl} className="dropPreview" alt=""/>);
    }
		
    return (
      <div className="App">
        <div className="topbar"></div>
       
        <div className='container'>
          <div className="row">
            <div className="col-sm-2 col-md-2 col-xs-2"></div>
            <div className="col-sm-4 col-md-4 col-xs-8 id">
              <div className='dropZone' id="upload-file-container" style={this.state.style}>{image1Preview}
                <input type='file' value='' name='image' onChange={this.handleImage1Change} />
              </div>                    
            </div>
            <div className="col-xs-1"></div>

            <div className="col-xs-2"></div>
            <div className="col-sm-4 col-md-4 col-xs-8 passport">            
              <div className='dropZone' id="upload-file-container" style={this.state.style}>{image2Preview}
                <input type='file' value='' name='passport' onChange={this.handleImage2Change} />
              </div>                         
            </div>
            <div className="col-sm-2 col-md-2 col-xs-2"></div>
          </div>
        </div>  
              

        <div className="container-fluid">
          <button className="analyze btn btn-default" onClick={this.formSubmitHandler} disabled={this.state.isLoading}>{buttonText}</button>
          {response} 
        </div>

      </div>
    );
	}
  
}

IndexPage.propTypes = {
  sendToApi: PropTypes.func
}

const mapStateToProps = state => ({
  status: state.status,
  statusMsg1: state.statusMsg1,
  statusMsg2: state.statusMsg2,
  response: state.response,
  showModal: state.showModal,
  buttonText: state.buttonText,
  modalText: state.modalText
})

export default connect(mapStateToProps, { receiveApiResponse })(IndexPage);







/*const mapStateToProps = state =>{
  return{
      ctr: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounte
  }
}


export default connect()(ComponentPageName)
*/