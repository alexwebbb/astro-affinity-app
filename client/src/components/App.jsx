import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import "./../css/index.css";

import Header from "./Header";
import About from "./About/About.jsx";
import Landing from "./Landing/index.jsx";
import Dashboard from "./Dashboard";
import NewProfile from "./NewProfile/index.jsx";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="app-css" >
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/affinities" component={Dashboard} />
            <Route path="/affinities/new" component={NewProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
