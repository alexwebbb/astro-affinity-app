import React from 'react';
import { Link } from 'react-router-dom';
import ProfileList from './profile/ProfileList';

const Dashboard = () => {
  return (
    <div>
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
