import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {
  state = { username: "", password: "" };

  setUsername(e) {
    this.setState({ username: e.target.value });
  }

  setPassword(e) {
    this.setState({password: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.getUsername(this.state.username);
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              <b>Username</b>
            </label>
            <input onChange={this.setUsername.bind(this)} />

            <label>
              <b>Password</b>
            </label>
            <input type="password" onChange={this.setPassword.bind(this)} />
            <div onClick={this.onSubmit.bind(this)}> <Link to={"/homepage"} >Login</Link></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
