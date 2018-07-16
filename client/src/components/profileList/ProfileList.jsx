import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import parseDate from "../../utils/parseDate";
import ZODIAC, { CHINESE, WESTERN } from "../../utils/zodiac";
import * as COLORS from "../../config/colors";
import ScoreDisplay from "./ScoreDisplay";

class ProfileList extends Component {
  state = { selectedProfile: 0 };

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  renderSignInfo(chineseSign, westernSign, date) {
    return (
      <ul className="collection">
        <li
          className={["collection-item", COLORS.ACCENT2, COLORS.TEXT3].join(
            " "
          )}
        >
          Western Sign:{" "}
          <span className="profile-list__active-sign">{westernSign}</span>
        </li>
        <li
          className={["collection-item", COLORS.ACCENT, COLORS.TEXT4].join(" ")}
        >
          Chinese Sign:{" "}
          <span className="profile-list__active-sign">{chineseSign}</span>
        </li>
        <li
          className={["collection-item", COLORS.WHITE, COLORS.TEXT4].join(" ")}
        >
          Birthdate: {date}
        </li>
      </ul>
    );
  }

  renderButtons(isPrimary, id) {
    if (!isPrimary) {
      return (
        <div>
          <div className="profile-list__button right">
            <a
              className="waves-effect waves-light btn-small"
              onClick={() => this.props.setPrimary(id)}
            >
              set primary
            </a>
          </div>
          <div className="profile-list__button right">
            <a
              className="waves-effect waves-light btn-small"
              onClick={() => this.props.removeProfile(id)}
            >
              <i className="material-icons left">delete_forever</i>
              delete
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="profile-list__button right">
            <a className={"waves-effect waves-light btn-large " + COLORS.ACCENT3}>
              current primary
            </a>
          </div>
        </div>
      );
    }
  }

  renderProfiles() {
    if (this.props.profiles.length === 0 || this.props.auth === null) {
      return null;
    }
    const primary = this.props.profiles.find(({ _id }) => {
      return _id === this.props.auth.primary;
    });

    let filteredProfiles = this.props.profiles.filter(({ _id }, i, a) => {
      return _id !== primary._id;
    });

    filteredProfiles.unshift(primary);

    return filteredProfiles.map(({ _id, name, birthdate, description }) => {
      const date = parseDate(birthdate).toDateString(),
        chineseSign = ZODIAC[CHINESE].getSign(birthdate),
        westernSign = ZODIAC[WESTERN].getSign(birthdate),
        selectedColor =
          this.props.selected === _id ? COLORS.SELECTED : COLORS.TERTIARY,
        isPrimary = this.props.auth.primary === _id;

      return (
        <div
          className={["card hoverable", selectedColor].join(" ")}
          key={_id}
          onClick={() => this.props.setSelected(_id)}
        >
          <div className="card-content row">
            <div className="col s12 m6 l12 xl5">
              <div className="col s6 xl12">
                <p className={"card-title " + COLORS.TEXT4}>{name}</p>
              </div>
              <div className={"col s6 xl12 " + COLORS.TEXT3}>
                <p>{description}</p>
              </div>

              <ScoreDisplay
                id={_id}
                name={name}
                namePrimary={primary.name}
                cSignPrimary={ZODIAC[CHINESE].getSign(primary.birthdate)}
                wSignPrimary={ZODIAC[WESTERN].getSign(primary.birthdate)}
                cSign={chineseSign}
                wSign={westernSign}
                active={!isPrimary}
              />
            </div>
            <div className="col s12 m6 l12 xl7">
              {this.renderSignInfo(chineseSign, westernSign, date)}
              {this.renderButtons(isPrimary, _id)}
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

const mapStateToProps = ({ auth, profiles, selected }) => {
  return { auth, profiles, selected };
};

export default connect(
  mapStateToProps,
  actions
)(ProfileList);
