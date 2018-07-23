import React from "react";
import * as COLORS from "../../config/colors";

export default ({ id, selected, setSelected }) => {
  if (selected) {
    return (
      <a
        class={
          "profile-list__title btn-floating btn-large waves-effect waves-light left " +
          COLORS.ACCENT3
        }
        onClick={() => setSelected(id)}
      >
        <i class="material-icons">star</i>
      </a>
    );
  } else {
    return (
      <a
        class={
          "profile-list__title btn-floating btn-large waves-effect waves-light left " +
          COLORS.SECONDARY
        }
        onClick={() => setSelected(id)}
      >
        <i class="material-icons">star_border</i>
      </a>
    );
  }
};
