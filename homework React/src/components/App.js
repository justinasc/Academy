import React,{ Component } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import {BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:""
    };
    this.getUsername = this.getUsername.bind(this);
  }

  getUsername(name){
    this.setState({userName:name})
  }

  render() {
    return (
          <BrowserRouter>
            <div>
              <Route exact path="/" render={(props) => ( <Login getUsername={this.getUsername}/> )}/>
              <Route exact path="/homepage" render={(props) => ( <HomePage userName={this.state.userName}/> )}/>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
