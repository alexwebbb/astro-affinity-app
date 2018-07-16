import React from "react";
import * as COLORS from "../../config/colors";
 
 export default ({isPrimary, id, setPrimary}) => {
    if (!isPrimary) {
      return (
        <div>
          <div className="profile-list__button right">
            <a
              className="waves-effect waves-light btn-small"
              onClick={() => setPrimary(id)}
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
            <a
              className={"waves-effect waves-light btn-large " + COLORS.ACCENT3}
            >
              current primary
            </a>
          </div>
        </div>
      );
    }
  }