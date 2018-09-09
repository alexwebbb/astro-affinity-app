import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileList from "./../ProfileList";
import GraphControl from "./../GraphControl";
import returnTapTarget from "./returnTapTarget";
import * as COLORS from "../../config/colors";
import * as M from "materialize-css";

class Dashboard extends Component {
  componentDidUpdate() {
    const elems = document.querySelectorAll(".dashboard .tap-target"),
      { auth, profiles } = this.props,
      taptargetInstances = M.TapTarget.init(elems);

    if (auth && profiles) {
      if (taptargetInstances.length > 0) {
        taptargetInstances[0].open();
      }
    }
  }

  render() {
    const { profiles } = this.props;

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
          {profiles && returnTapTarget(profiles.length)}
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ auth, profiles }) => {
  return { auth, profiles };
};

export default connect(mapStateToProps)(Dashboard);
