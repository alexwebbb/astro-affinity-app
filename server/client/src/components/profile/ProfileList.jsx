import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import { getSign as getChineseSign } from "../../utils/chineseZodiac";
import { getSign as getWesternSign } from "../../utils/westernZodiac";

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
          className={["card hoverable", currentState].join(" ")}
          key={_id}
          onClick={() => this.props.setSelected(_id)}
        >
          <div className="card-content row">
            <div className="col s12 m3">
              <span className="card-title">{name}</span>
              <p>{description}</p>
            </div>
            <div className="col s12 m6">
              <ul className="collection">
                <li className="collection-item">Western Sign: {westernSign}</li>
                <li className="collection-item">Eastern Sign: {chineseSign}</li>
                <li className="collection-item">Birthdate: {date}</li>
              </ul>
            </div>
            <div className="col s12 m3">
              <a
                className="waves-effect waves-light btn-large right"
                onClick={() => this.props.removeProfile(_id)}
              >
                <i className="material-icons left">delete_forever</i>
                delete
              </a>
            </div>
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
