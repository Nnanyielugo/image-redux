import React, { Component, PropTypes } from 'react';
import _ from 'lodash';



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