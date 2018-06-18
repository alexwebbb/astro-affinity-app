import React from "react";
import { Link } from "react-router-dom";
import Graph from "./Graph";
import ProfileList from "./profile/ProfileList";
import { westernZodiac } from "../data/westernZodiac";

const Dashboard = () => {
  const zodiac = westernZodiac();

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <Graph sign="pisces" zodiac={zodiac} />
          <Graph sign="aries" zodiac={zodiac} />
        </div>
      </div>

      <ProfileList />
      <div className="fixed-action-btn">
        <Link to="/affinities/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
