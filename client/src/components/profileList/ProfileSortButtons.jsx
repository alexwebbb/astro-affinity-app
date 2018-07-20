import React from "react";
import * as COLORS from "../../config/colors";
import { CHINESE, WESTERN, COMBINED } from "../../utils/zodiac";

export default ({ currentIndex, currentReverse, setSort, setReverse }) => {
  const isActive = index => {
    if (currentIndex === index) {
      return COLORS.ACCENT3;
    }
  };

  return (
    <div className={"card " + COLORS.MENU}>
      <div className="card-content row center-align">
        <p className="card-title white-text">Sort order:</p>

        <a
          className={
            "hoverable waves-effect waves-light btn profile-list__sort-button " +
            isActive(WESTERN)
          }
          onClick={() => setSort(WESTERN)}
        >
          Western
        </a>
        <a
          className={
            "hoverable waves-effect waves-light btn profile-list__sort-button " +
            isActive(CHINESE)
          }
          onClick={() => setSort(CHINESE)}
        >
          Chinese
        </a>
        <a
          className={
            "hoverable waves-effect waves-light btn profile-list__sort-button " +
            isActive(COMBINED)
          }
          onClick={() => setSort(COMBINED)}
        >
          Combined
        </a>
        <a
          className={
            "hoverable waves-effect waves-light btn profile-list__sort-button " +
            (currentReverse ? COLORS.ACCENT5 : "")
          }
          onClick={setReverse}
        >
          Reverse
        </a>
      </div>
    </div>
  );
};
