import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { getSign as getChineseSign } from "../../data/chineseZodiac";
import { getWesternSign } from "../../utils/getSign";

class ProfileList extends Component {
  state = { selectedProfile: 0 };

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  renderProfiles() {
    return this.props.profiles.map(({ _id, name, birthdate, description }) => {
      const date = new Date(birthdate).toLocaleDateString(),
        westernSign = getWesternSign(birthdate),
        chineseSign = getChineseSign(birthdate),
        currentState =
          this.props.selected === _id ? "green accent-1" : "darken-1";

      return (
        <div
          className={["card", currentState].join(" ")}
          key={_id}
          onClick={() => this.props.setSelected(_id)}
        >
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{description}</p>
            <a
              className="waves-effect waves-light btn"
              onClick={() => this.props.removeProfile(_id)}
            >
              <i className="material-icons right">delete_forever</i>delete
            </a>
            <p className="right breadcrumb">Western Sign: {westernSign}</p>
            <p className="right breadcrumb">Eastern Sign: {chineseSign}</p>
            <p className="right breadcrumb">Birthdate: {date}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProfiles()}</div>;
  }
}

const mapStateToProps = ({ profiles, selected }) => {
  return { profiles, selected };
};

export default connect(
  mapStateToProps,
  actions
)(ProfileList);
