import React from "react";
import { Link } from "react-router-dom";
import Graph from "./graph/Graph";
import ProfileList from "./profile/ProfileList";
import * as westernZodiac from "../utils/westernZodiac";

const Dashboard = () => {

  return (
    <div>
      <div className="row">
        <div className="col m12 l7 xl5">
          <Graph zodiac={westernZodiac} />

        </div>
        <div className="col s12 m12 l5 xl7">
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
