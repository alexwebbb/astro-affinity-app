import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";
import sortProfiles from "./sortProfiles";
import SignInfo from "./ProfileSignInfo";
import SortButtons from "./ProfileSortButtons";
import SelectionButton from "./ProfileSelectionButton";
import PrimaryButtons from "./ProfilePrimaryButtons";
import ScoreDisplay from "./ProfileScoreDisplay";
import { WESTERN, CHINESE, COMBINED } from "../../utils/zodiac";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedProfile: 0, sortIndex: COMBINED, reverse: false };
    this.setSort = this.setSort.bind(this);
    this.setReverse = this.setReverse.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchProfiles();
    
    this.setDefaultSelected();
  }

  componentDidUpdate() {
    const elems = document.querySelectorAll(".profile-list .modal");
    M.Modal.init(elems);
    
    this.setDefaultSelected();
  }
  
  setDefaultSelected() {
    if (this.props.auth && this.props.selected === 0) {
      this.props.setSelected(this.props.auth.primary);
    }
  }

  setSort(index) {
    this.setState({ sortIndex: index });
  }

  setReverse() {
    this.setState({ reverse: !this.state.reverse });
  }

  renderProfiles() {
    const { profiles, auth, selected } = this.props;

    if (profiles === null || profiles.length === 0 || auth == null) {
      return null;
    }

    const { primary, newProfiles } = sortProfiles(
      profiles,
      auth,
      this.state.sortIndex,
      this.state.reverse
    );

    return newProfiles.map(profile => {
      const { _id, name, birthdate, description } = profile,
        isSelected = selected === _id,
        selectedColor = isSelected
          ? COLORS.SELECTED_BACKGROUND
          : COLORS.PROFILE_BACKGROUND,
        isPrimary = auth.primary === _id;

      return (
        <div className={["card hoverable", selectedColor].join(" ")} key={_id}>
          <div className="card-content row">
            <div className="col s12 m6 l12 xl5">
              <div className="row">
                <SelectionButton
                  id={_id}
                  selected={isSelected}
                  setSelected={this.props.setSelected}
                />
                <p className={"card-title " + COLORS.TEXT4}>{name}</p>
                <p className={"right " + COLORS.TEXT3}>{description}</p>
              </div>
              <ScoreDisplay
                id={_id}
                namePrimary={primary.name}
                profile={profile}
                active={!isPrimary}
              />
            </div>
            <div className="col s12 m6 l12 xl7">
              <SignInfo cSign={profile[CHINESE].sign} wSign={profile[WESTERN].sign} birthdate={birthdate} />
              <img className="responsive-img circle center-align" src="https://www.famousbirthdays.com/faces/mars-bruno-image.jpg" alt="bruno mars"/>
              <PrimaryButtons
                id={_id}
                isPrimary={isPrimary}
                setPrimary={this.props.setPrimary}
                removeProfile={this.props.removeProfile}
              />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="profile-list">
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
