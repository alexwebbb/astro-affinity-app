import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";
import getData from "./getData";
import SignInfo from "./ProfileSignInfo";
import Buttons from "./ProfileButtons";
import ScoreDisplay from "./ProfileScoreDisplay";

import { CHINESE, WESTERN } from "../../utils/zodiac";

const COMBINED = "combined";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedProfile: 0, sortIndex: COMBINED, reverse: false };
    this.setPrimary = this.props.setPrimary.bind(this);
    this.removeProfile = this.props.removeProfile.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  renderSortButtons() {
    const isActive = index => {
      if (this.state.sortIndex === index) {
        return COLORS.ACCENT3;
      }
    };

    return (
      <div className={"card " + COLORS.MENU}>
        <div className="card-content row center-align">
          
            <p className="card-title white-text">Sort order:</p>

            <a
              className={
                "hoverable waves-effect waves-light btn profile-list__sort-button " +
                isActive(WESTERN)
              }
              onClick={() => this.setState({ sortIndex: WESTERN })}
            >
              Western
            </a>
            <a
              className={
                "hoverable waves-effect waves-light btn profile-list__sort-button " +
                isActive(CHINESE)
              }
              onClick={() => this.setState({ sortIndex: CHINESE })}
            >
              Chinese
            </a>
            <a
              className={
                "hoverable waves-effect waves-light btn profile-list__sort-button " +
                isActive(COMBINED)
              }
              onClick={() => this.setState({ sortIndex: COMBINED })}
            >
              Combined
            </a>
            <a
              className={
                "hoverable waves-effect waves-light btn profile-list__sort-button " +
                (this.state.reverse ? COLORS.ACCENT5 : "")
              }
              onClick={() => this.setState({ reverse: !this.state.reverse })}
            >
              Reverse
            </a>
          
        </div>
      </div>
    );
  }

  sortProfiles() {}

  renderProfiles() {
    const { profiles, auth } = this.props;

    if (profiles.length === 0 || auth === null) {
      return null;
    }

    let pIndex = profiles.findIndex(({ _id }) => {
      return _id === auth.primary;
    });

    if (pIndex < 0) {
      pIndex = 0;
    }

    const newProfiles = profiles.map((v, i) => {
      return {
        index: i,
        ...v,
        ...getData(v.birthdate, profiles[pIndex].birthdate)
      };
    });

    const primaryProfile = newProfiles.splice(pIndex, 1)[0];

    switch (this.state.sortIndex) {
      case CHINESE:
        newProfiles.sort((a, b) => {
          return b.cScore - a.cScore;
        });
        break;
      case WESTERN:
        newProfiles.sort((a, b) => {
          return b.wScore - a.wScore;
        });
        break;
      case COMBINED:
        newProfiles.sort((a, b) => {
          return b.combinedScore - a.combinedScore;
        });
        break;
    }

    if (this.state.reverse) {
      newProfiles.reverse();
    }

    newProfiles.splice(0, 0, primaryProfile);

    return newProfiles.map(data => {
      const { _id, name, cSign, wSign, birthdate, description } = data,
        selectedColor =
          this.props.selected === _id ? COLORS.SELECTED : COLORS.TERTIARY,
        isPrimary = auth.primary === _id;

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
                namePrimary={profiles[pIndex].name}
                data={data}
                active={!isPrimary}
              />
            </div>
            <div className="col s12 m6 l12 xl7">
              <SignInfo cSign={cSign} wSign={wSign} birthdate={birthdate} />
              <Buttons
                isPrimary={isPrimary}
                id={_id}
                setPrimary={id => this.setPrimary(id)}
                removeProfile={id => this.removeProfile(id)}
              />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSortButtons()}
        {this.renderProfiles()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profiles, selected }) => {
  return { auth, profiles, selected };
};

export default connect(
  mapStateToProps,
  actions
)(ProfileList);
