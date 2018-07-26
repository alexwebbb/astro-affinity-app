import React from "react";
import { CHINESE, WESTERN } from "../../utils/zodiac";

export default ({ setZodiac, isActive }) => {
  return (
    <div className="card-action center-align">
      <div className="group">
        <div className="col s12 m4 offset-m1">
          <a
            className={
              "graph-control__button waves-effect waves-light btn-large " +
              isActive(WESTERN)
            }
            onClick={() => setZodiac(WESTERN)}
          >
            Western
          </a>
        </div>
        <div className="col s12 m4 offset-m2">
          <a
            className={
              "graph-control__button waves-effect waves-light btn-large " +
              isActive(CHINESE)
            }
            onClick={() => setZodiac(CHINESE)}
          >
            Chinese
          </a>
        </div>
      </div>
    </div>
  );
};
