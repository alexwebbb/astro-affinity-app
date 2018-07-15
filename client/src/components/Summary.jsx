import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "./profileList/ProfileList";
import GraphControl from "./graph/GraphControl";

const Dashboard = () => {

  return (
    <main className="affinities-css">
      <div className="row">
        <div className="col m12 l7 xl6">
          <GraphControl />

        </div>
        <div className="col s12 m12 l5 xl6">
          <ProfileList />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
