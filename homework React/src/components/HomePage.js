import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import MainContent from "./MainContent";
import Footer from "./Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header userName={this.props.userName} />
        <Menu/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;