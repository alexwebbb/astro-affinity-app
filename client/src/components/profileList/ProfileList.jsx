import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";
import getData from "./getData";
import SignInfo from "./ProfileSignInfo";
import SortButtons from "./ProfileSortButtons";
import Buttons from "./ProfileButtons";
import ScoreDisplay from "./ProfileScoreDisplay";

import { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedProfile: 0, sortIndex: COMBINED, reverse: false };
    this.setPrimary = this.props.setPrimary.bind(this);
    this.removeProfile = this.props.removeProfile.bind(this);
    this.setSort = this.setSort.bind(this);
    this.setReverse = this.setReverse.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

  setSort(index) {
    this.setState({ sortIndex: index });
  }

  setReverse() {
    this.setState({ reverse: !this.state.reverse });
  }

  sortProfiles(profiles, auth) {
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

    return { primary: profiles[pIndex], newProfiles };
  }

  renderProfiles() {
    const { profiles, auth } = this.props;

    if (profiles.length === 0 || auth === null) {
      return null;
    }

    const { primary, newProfiles } = this.sortProfiles(profiles, auth);

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
                namePrimary={primary.name}
                data={data}
                active={!isPrimary}
              />
            </div>
            <div className="col s12 m6 l12 xl7">
              <SignInfo cSign={cSign} wSign={wSign} birthdate={birthdate} />
              <Buttons
                isPrimary={isPrimary}
                id={_id}
                setPrimary={this.setPrimary}
                removeProfile={this.removeProfile}
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
        <SortButtons
          currentIndex={this.state.sortIndex}
          currentReverse={this.state.reverse}
          setSort={this.setSort}
          setReverse={this.setReverse}
        />
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
