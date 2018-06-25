import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "./profile/ProfileList";
import GraphControl from "./graph/GraphControl";

const Dashboard = () => {

  return (
    <div>
      <div className="row">
        <div className="col m12 l7 xl6">
          <GraphControl />

        </div>
        <div className="col s12 m12 l5 xl6">
          <ProfileList />
        </div>
      </div>

      
      <div className="fixed-action-btn">
        <Link to="/affinities/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
