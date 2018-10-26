import React from "react";
import * as COLORS from "./../../config/colors";

export default () => {
  return (
    <div>
      <p className="landing__text">
        To get started, login with google. Or, use the demo account linked
        below.
      </p>
      <a
        href="/auth/demo"
        className={
          "waves-effect waves-light btn-large " + COLORS.SAVE_BUTTON
        }
      >
        <i className="material-icons left">fast_forward</i>
        Demo Account
      </a>
      <br />
      <p className="landing__credentials">
        (to reset the demo account, go to settings)
      </p>
    </div>
  );
};
