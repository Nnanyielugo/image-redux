import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import './App.css'


let timer = '';

class App extends Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}




export default App;