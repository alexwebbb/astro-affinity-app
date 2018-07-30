import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";
import Payments from "./Payments";
import * as COLORS from "../config/colors";

const ABOUT_PATH = "/about";

class Header extends Component {
  componentDidUpdate() {
    const elems = document.querySelectorAll(".app-header .dropdown-trigger");
    M.Dropdown.init(elems);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="nav-mobile">
            <li key="1">
              <Link to={ABOUT_PATH}>About</Link>
            </li>
            <li key="2">
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <div>
            <ul className="right">
              <li key="1">
                <Payments />
              </li>
              <li key="2" style={{ margin: "0 10px" }}>
                Slots: {this.props.auth.credits}
              </li>
              <li key="3" className="hide-on-small-only">
                <Link to={ABOUT_PATH}>About</Link>
              </li>
              <li key="4" className="hide-on-small-only">
                <a href="/api/logout">Logout</a>
              </li>
              <li key="5">
                <a
                  className="dropdown-trigger hide-on-med-and-up"
                  href="#!"
                  data-target="dropdown1"
                >
                  <i className="material-icons right">more_vert</i>
                </a>
              </li>
            </ul>
            <ul id="dropdown1" className="dropdown-content right">
              <li key="1">
                <Link to={ABOUT_PATH}>About</Link>
              </li>
              <li key="2" className="divider" />
              <li key="3">
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className={"nav-wrapper app-header " + COLORS.PRIMARY_BLUE}>
          <Link
            to={this.props.auth ? "/affinities" : "/"}
            className="left brand-logo"
          >
            Astro <span className="hide-on-small-only">App</span>
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
