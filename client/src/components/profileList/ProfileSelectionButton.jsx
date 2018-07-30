import React from "react";
import * as COLORS from "../../config/colors";

const classes =
  "profile-list__title btn-floating btn-large waves-effect waves-light left";

export default ({ id, selected, setSelected }) => {
  if (selected) {
    return (
      <a
        className={[classes, COLORS.SELECTED_BUTTON].join(" ")}
        onClick={() => setSelected(id)}
      >
        <i className="material-icons">star</i>
      </a>
    );
  } else {
    return (
      <a
        className={[classes, COLORS.GRAPH_BACKGROUND].join(" ")}
        onClick={() => setSelected(id)}
      >
        <i className="material-icons">star_border</i>
      </a>
    );
  }
};
