import React from "react";
import * as COLORS from "../../config/colors";

export default ({ id, selected, setSelected }) => {
  if (selected) {
    return (
      <a
        className={
          "profile-list__title btn-floating btn-large waves-effect waves-light left " +
          COLORS.SELECTED_BUTTON
        }
        onClick={() => setSelected(id)}
      >
        <i className="material-icons">star</i>
      </a>
    );
  } else {
    return (
      <a
        className={
          "profile-list__title btn-floating btn-large waves-effect waves-light left " +
          COLORS.GRAPH_BACKGROUND
        }
        onClick={() => setSelected(id)}
      >
        <i className="material-icons">star_border</i>
      </a>
    );
  }
};
