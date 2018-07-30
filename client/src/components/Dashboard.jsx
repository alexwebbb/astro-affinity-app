import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileList from "./ProfileList";
import GraphControl from "./GraphControl";
import * as COLORS from "../config/colors";
import * as M from "materialize-css";

class Dashboard extends Component {

  componentDidMount() {
    const elems = document.querySelectorAll(".dashboard .tap-target");
    this.taptargetInstances = M.TapTarget.init(elems);
  }

  componentDidUpdate() {
    const { auth, profiles } = this.props;
    if (auth && profiles && profiles.length < 3) {
      this.taptargetInstances[0].open();
    }
  }
  
  render() {
    return (
      <main className="dashboard">
        <div className="row">
          <div className="col s12 m12 l7 xl6">
            <GraphControl />
          </div>
          <div className="col s12 m12 l5 xl6">
            <ProfileList />
          </div>
        </div>

        <div className="fixed-action-btn">
          <Link
            to="/affinities/new"
            className={"btn-floating btn-large " + COLORS.PRIMARY_RED}
            id="newProfile"
          >
            <i className="material-icons">add</i>
          </Link>
          {/* <!-- Tap Target Structure --> */}
          <div className="tap-target" data-target="newProfile">
            <div className="tap-target-content white-text">
              <h5>You're almost there!</h5>
              <p>Try adding another profile by clicking this button! You need at least three profiles to use the app.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ auth, profiles }) => {
  return { auth, profiles };
};

export default connect(
  mapStateToProps
)(Dashboard);
