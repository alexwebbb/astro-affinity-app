import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import parseDate from "../../utils/parseDate";

import * as COLORS from "../../config/colors";

import ScoreDisplay from "./ScoreDisplay";

import * as chineseZodiac from "../../utils/chineseZodiac";
import * as westernZodiac from "../../utils/westernZodiac";

class ProfileList extends Component {
  state = { selectedProfile: 0 };

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  renderButtons(active, id) {
    if (active) {
      return (
        <div className="profile-list-buttons">
          <a
            className="waves-effect waves-light btn-small"
            onClick={() => this.props.setPrimary(id)}
          >
            set primary
          </a>
          <a
            className="waves-effect waves-light btn-small"
            onClick={() => this.props.removeProfile(id)}
          >
            <i className="material-icons left">delete_forever</i>
            delete
          </a>
        </div>
      );
    }
  }

  renderProfiles() {
    const primary = this.props.profiles.find(({ _id }) => {
      if (this.props.auth !== null) {
        return _id === this.props.auth.primary;
      } else {
        return null;
      }
    });
    // let chineseSignPrimary, westernSignPrimary;
    if (primary) {
      const chineseSignPrimary = chineseZodiac.getSign(primary.birthdate),
        westernSignPrimary = westernZodiac.getSign(primary.birthdate);

      return this.props.profiles.map(
        ({ _id, name, birthdate, description }) => {
          const date = parseDate(birthdate).toDateString(),
            chineseSign = chineseZodiac.getSign(birthdate),
            westernSign = westernZodiac.getSign(birthdate),
            currentState =
              this.props.selected === _id ? COLORS.SELECTED : COLORS.TERTIARY,
            isPrimary = this.props.auth.primary === _id;

          return (
            <div
              className={["card hoverable", currentState].join(" ")}
              key={_id}
              onClick={() => this.props.setSelected(_id)}
            >
              <div className="card-content row">
                <div className="col s12 m6 l12 xl5">
                  <div className="col s6 xl12">
                    <p className={"card-title " + COLORS.TEXT4}>
                      {name}
                    </p>
                  </div>
                  <div className={"col s6 xl12 " + COLORS.TEXT3}>
                    <p>{description}</p>
                  </div>
                  <ScoreDisplay
                    id={_id}
                    cSignPrimary={chineseSignPrimary}
                    wSignPrimary={westernSignPrimary}
                    cSign={chineseSign}
                    wSign={westernSign}
                  />
                </div>
                <div className="col s12 m6 l12 xl7">
                  <ul className="collection">
                    <li
                      className={[
                        "collection-item",
                        COLORS.ACCENT2,
                        COLORS.TEXT3
                      ].join(" ")}
                    >
                      Western Sign:{" "}
                      <span className="profile-card__active-sign">
                        {westernSign}
                      </span>
                    </li>
                    <li
                      className={[
                        "collection-item",
                        COLORS.ACCENT,
                        COLORS.TEXT4
                      ].join(" ")}
                    >
                      Chinese Sign:{" "}
                      <span className="profile-card__active-sign">
                        {chineseSign}
                      </span>
                    </li>
                    <li
                      className={[
                        "collection-item",
                        COLORS.WHITE,
                        COLORS.TEXT4
                      ].join(" ")}
                    >
                      Birthdate: {date}
                    </li>
                  </ul>
                  {this.renderButtons(!isPrimary, _id)}
                </div>
              </div>
            </div>
          );
        }
      );
    }
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
