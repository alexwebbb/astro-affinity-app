import React from "react";
import { CHINESE, WESTERN } from "../../utils/zodiac";

const classes = "graph-control__button waves-effect waves-light btn-large";

export default ({ setZodiac, isActive }) => {
  return (
    <div className="card-action center-align">
      <div className="group">
        <div className="col s12 m4 offset-m1">
          <a
            className={[classes, isActive(WESTERN)].join(" ")}
            onClick={() => setZodiac(WESTERN)}
          >
            Western
          </a>
        </div>
        <div className="col s12 m4 offset-m2">
          <a
            className={[classes, isActive(CHINESE)].join(" ")}
            onClick={() => setZodiac(CHINESE)}
          >
            Chinese
          </a>
        </div>
      </div>
    </div>
  );
};
