import React, { Component } from 'react';
import Header from './Header'
import InputComponent from './InputComponent'
import LeftTable from './LeftTable'
import Detail from './Detail'
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.handleUser = this.handleUser.bind(this);
      this.getDetail = this.getDetail.bind(this);
      this.state={
        users:[],
        userDetail:{},
        money:[]
      }
    }

    componentDidMount(){
      return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json())
      .then(res => this.setState({
          money: res
      }))
    }

handleUser(data) {
     this.setState(prevState => ({
      users: [...prevState.users, data]
    }))
  }


getDetail(user){
  this.setState({
    userDetail:user
  })
  

}
  render() {
    return (
      <div className="container-fluid" id='contact' >
        <div className="container">
          <Header money={this.state.money} />
          <div className="col-lg-6 inBorder">
             <InputComponent
             onClick={this.handleUser}
             />
          </div>
          <div className="col-lg-6">
             <LeftTable users={this.state.users} selected={this.getDetail}/>
          </div>
          <div className="col-lg-12">
             <Detail userDetail={this.state.userDetail}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
