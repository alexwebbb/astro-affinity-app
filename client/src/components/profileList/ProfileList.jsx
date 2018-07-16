import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as COLORS from "../../config/colors";
import getData from "./getData";
import SignInfo from "./ProfileSignInfo";
import Buttons from "./ProfileButtons";
import ScoreDisplay from "./ProfileScoreDisplay";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedProfile: 0 };
    this.setPrimary = this.props.setPrimary.bind(this);
    this.removeProfile = this.props.removeProfile.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchProfiles();
    this.props.setSelected(this.props.profiles[0]._id);
  }

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

    newProfiles.splice(0, 0, newProfiles.splice(pIndex, 1)[0]);

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
