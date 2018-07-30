import React from "react";
import * as COLORS from "../../config/colors";
import { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";

const classes =
  "hoverable waves-effect waves-light btn profile-list__sort-button";

export default ({ currentIndex, currentReverse, setSort, setReverse }) => {
  const isActive = index => {
    if (currentIndex === index) {
      return COLORS.SELECTED_BUTTON;
    }
  };

  return (
    <div className={"card " + COLORS.MENU_BACKGROUND}>
      <div className="card-content row center-align">
        <p className="card-title white-text">Sort order:</p>

        <a
          className={[classes, isActive(WESTERN)].join(" ")}
          onClick={() => setSort(WESTERN)}
        >
          Western
        </a>
        <a
          className={[classes, isActive(CHINESE)].join(" ")}
          onClick={() => setSort(CHINESE)}
        >
          Chinese
        </a>
        <a
          className={[classes, isActive(COMBINED)].join(" ")}
          onClick={() => setSort(COMBINED)}
        >
          Combined
        </a>
        <a
          className={[classes, currentReverse ? COLORS.PRIMARY_RED : ""].join(
            " "
          )}
          onClick={setReverse}
        >
          Reverse
        </a>
      </div>
    </div>
  );
};
