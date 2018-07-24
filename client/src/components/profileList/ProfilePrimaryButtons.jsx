import React from "react";
import * as COLORS from "../../config/colors";

export default ({ id, isPrimary, setPrimary, removeProfile }) => {
  if (!isPrimary) {
    return (
      <div>
        <a
          className="waves-effect waves-light btn-small profile-list__primary-button right"
          onClick={() => setPrimary(id)}
        >
          set primary
        </a>
        <a
          className="waves-effect waves-light btn-small profile-list__primary-button right"
          onClick={() => removeProfile(id)}
        >
          <i className="material-icons left">delete_forever</i>
          delete
        </a>
      </div>
    );
  } else {
    return (
      <a
        className={
          "waves-effect waves-light btn-large profile-list__primary-button right " +
          COLORS.PRIMARY
        }
      >
        current primary
      </a>
    );
  }
};
