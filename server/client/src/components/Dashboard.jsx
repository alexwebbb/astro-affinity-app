import React from 'react';
import { Link } from 'react-router-dom';
import Graph from './Graph';
import ProfileList from './profile/ProfileList';
import { westernZodiac } from "../data/westernZodiac";

const Dashboard = () => {
  return (
    <div>
      <Graph sign="aries" zodiac={westernZodiac()} />
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
