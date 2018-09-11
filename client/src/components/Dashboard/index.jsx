import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "./../ProfileList";
import GraphControl from "./../GraphControl";
import TapTargetGuide from "./TapTargetGuide";
import * as COLORS from "./../../config/colors";

export default () => {
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
        <TapTargetGuide />
      </div>
    </main>
  );
};
