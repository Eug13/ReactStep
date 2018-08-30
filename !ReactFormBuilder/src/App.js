import React, { Component } from 'react';

import Header from './Header'
import FormTemplate from './FormTemplate'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid m" id='contact' >
        <div className="container">
          <Header />
          <div className="col-lg-12">
             <FormTemplate/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
