import React, { Component } from 'react';
import Header from './Header'
import InputComponent from './InputComponent'
import LeftTable from './LeftTable'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" id='contact' >
        <div className="container">
          <Header />
          <div className="col-lg-6">
             <InputComponent/>
          </div>
          <div className="col-lg-6">
             <LeftTable/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
