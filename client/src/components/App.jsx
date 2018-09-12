import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./../css/index.css";
import Header from "./Header";
import About from "./About";
import Settings from "./Settings";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import NewProfile from "./NewProfile";

const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="app-css">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <PrivateRoute
              exact
              auth={this.props.auth}
              path="/settings"
              component={Settings}
            />
            <PrivateRoute
              exact
              auth={this.props.auth}
              path="/affinities"
              component={Dashboard}
            />
            <PrivateRoute
              auth={this.props.auth}
              path="/affinities/new"
              component={NewProfile}
            />
          </div>
        </BrowserRouter>
        <footer className="footer">
          <p className="center-align">Alex Webb - 2018</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(App);
