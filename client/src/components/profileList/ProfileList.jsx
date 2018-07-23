import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";
import sortProfiles from "./sortProfiles";
import SignInfo from "./ProfileSignInfo";
import SortButtons from "./ProfileSortButtons";
import SelectionButton from "./ProfileSelectionButton";
import PrimaryButtons from "./ProfilePrimaryButtons";
import ScoreDisplay from "./ProfileScoreDisplay";

import { COMBINED } from "../../utils/zodiac";

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

  renderProfiles() {
    const { profiles, auth } = this.props;

    if (profiles.length === 0 || auth === null) {
      return null;
    }

    const { primary, newProfiles } = sortProfiles(
      profiles,
      auth,
      this.state.sortIndex,
      this.state.reverse
    );

    return newProfiles.map(data => {
      const { _id, name, cSign, wSign, birthdate, description } = data,
        isSelected = this.props.selected === _id,
        selectedColor = isSelected ? COLORS.SELECTED : COLORS.TERTIARY,
        isPrimary = auth.primary === _id;

      return (
        <div
          className={["card hoverable", selectedColor].join(" ")}
          key={_id}
        >
          <div className="card-content row">
            <div className="col s12 m6 l12 xl5">
              <div className="row">
                <SelectionButton id={_id} selected={isSelected} setSelected={this.props.setSelected} />
                <p className={"card-title " + COLORS.TEXT4}>{name}</p>
                <p className={"right " + COLORS.TEXT3}>{description}</p>
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
              <PrimaryButtons
                id={_id}
                isPrimary={isPrimary}
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
