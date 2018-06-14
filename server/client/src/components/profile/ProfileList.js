import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProfiles, removeProfile } from "../../actions";

class ProfileList extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.removeProfile = removeProfile.bind(this);
  // }

  componentDidMount() {
    this.props.fetchProfiles();
  }

  renderProfiles() {
    const { history } = this.props;

    return this.props.profiles.map(profile => {
      return (
        <div className="card darken-1" key={profile._id}>
          <div className="card-content">
            <span className="card-title">{profile.name}</span>
            <p>{profile.description}</p>
            <a
              className="waves-effect waves-light btn"
              // working on this 
              onClick={removeProfile({ id: profile._id }, history)}
            >
              <i className="material-icons right">delete_forever</i>button
            </a>
            <p className="right">
              Birthdate: {new Date(profile.birthdate).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProfiles()}</div>;
  }
}

function mapStateToProps({ profiles }) {
  return { profiles };
}

export default connect(
  mapStateToProps,
  { fetchProfiles }
)(withRouter(ProfileList));
