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

        {/* <!-- Modal Trigger --> */}
        <a
          className="waves-effect waves-light btn-small profile-list__primary-button right modal-trigger"
          href={"#modal-" + id}
          //
        >
          <i className="material-icons left">delete_forever</i>
          delete
        </a>

        {/* <!-- Modal Structure --> */}
        <div id={"modal-" + id} className={"modal " + COLORS.WHITE}>
          <div className={"modal-content center " + COLORS.TEXT3}>
            <h4>Delete Profile?</h4>
          </div>
          <div className={"modal-footer " + COLORS.ACCENT1}>
            <a
              href="#!"
              className={"col s5 center-align modal-close waves-effect waves-red btn-flat " + COLORS.WHITE}
            >
              No
            </a>
            <a
              href="#!"
              className={
                "col s5 offset-s2 center-align modal-close waves-effect waves-light btn-flat white-text right " +
                COLORS.PRIMARY_RED
              }
              onClick={() => removeProfile(id)}
            >
              Yes
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <a
        className={
          "waves-effect waves-light btn-large profile-list__primary-button right " +
          COLORS.PRIMARY_BLUE
        }
      >
        current primary
      </a>
    );
  }
};
