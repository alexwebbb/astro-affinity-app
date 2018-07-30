import React from "react";
import { Spinner } from "../../utils/materialize-widgets";

export default () => {
  return (
    <div>
      <div className="card">
        <div
          className="card-content white-text valign-wrapper"
          style={{ height: "500px", paddingLeft: "40%" }}
        >
          <Spinner />
          <div className="center-align" />
        </div>
      </div>
    </div>
  );
};
