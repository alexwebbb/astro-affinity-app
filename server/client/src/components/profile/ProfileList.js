import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions';

class ProfileList extends Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }

  renderProfiles() {
    return this.props.profiles.reverse().map(profile => {
      return (
        <div className="card darken-1" key={profile._id}>
          <div className="card-content">
            <span className="card-title">{profile.name}</span>
            <p>
              {profile.description}
            </p>
            <p className="right">
              Birthdate: {new Date(profile.birthdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderProfiles()}
      </div>
    );
  }
}

function mapStateToProps({ profiles }) {
  return { profiles };
}

export default connect(mapStateToProps, { fetchProfiles })(ProfileList);
