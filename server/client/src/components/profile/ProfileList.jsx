import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import parseDate from "../../utils/parseDate";

import { getSign as getChineseSign } from "../../utils/chineseZodiac";
import { getSign as getWesternSign } from "../../utils/westernZodiac";

class ProfileList extends Component {
  state = { selectedProfile: 0 };

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  renderSetPrimaryButton(active, id) {
    if (active) {
      return (
        <a
          className="waves-effect waves-light btn-small right"
          onClick={() => this.props.setPrimary(id)}
        >
          set primary
        </a>
      );
    }
  }

  renderDeleteButton(active, id) {
    if (!active) {
      return (
        <a
          className="waves-effect waves-light btn-small right"
          onClick={() => this.props.removeProfile(id)}
        >
          <i className="material-icons left">delete_forever</i>
          delete
        </a>
      );
    }
  }

  renderProfiles() {
    return this.props.profiles.map(({ _id, name, birthdate, description }) => {
      const date = parseDate(birthdate).toDateString(),
        westernSign = getWesternSign(birthdate),
        chineseSign = getChineseSign(birthdate),
        currentState =
          this.props.selected === _id ? "green accent-1" : "darken-1",
        isPrimary = this.props.auth.primary ===_id;

      return (
        <div
          className={["card hoverable", currentState].join(" ")}
          key={_id}
          onClick={() => this.props.setSelected(_id)}
        >
          <div className="card-content row">
            <div className="col s12 m3 l12 xl3">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </div>
            <div className="col s12 m9 l12 xl9">
              <ul className="collection">
                <li className="collection-item">Western Sign: {westernSign}</li>
                <li className="collection-item">Eastern Sign: {chineseSign}</li>
                <li className="collection-item">Birthdate: {date}</li>
              </ul>
            </div>
            {this.renderSetPrimaryButton(!isPrimary, _id)}
            {this.renderDeleteButton(isPrimary, _id)}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProfiles()}</div>;
  }
}

const mapStateToProps = ({ auth, profiles, selected }) => {
  return { auth, profiles, selected };
};

export default connect(
  mapStateToProps,
  actions
)(ProfileList);
