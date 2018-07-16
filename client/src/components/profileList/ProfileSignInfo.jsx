import React from "react";
import * as COLORS from "../../config/colors";

export default ({cSign, wSign, birthdate}) => {
    return (
      <ul className="collection">
        <li
          className={["collection-item", COLORS.ACCENT2, COLORS.TEXT3].join(
            " "
          )}
        >
          Western Sign:{" "}
          <span className="profile-list__active-sign">{wSign}</span>
        </li>
        <li
          className={["collection-item", COLORS.ACCENT, COLORS.TEXT4].join(" ")}
        >
          Chinese Sign:{" "}
          <span className="profile-list__active-sign">{cSign}</span>
        </li>
        <li
          className={["collection-item", COLORS.WHITE, COLORS.TEXT4].join(" ")}
        >
          Birthdate: {birthdate}
        </li>
      </ul>
    );
};