import React from "react";

export default () => {
  return (
    <div>
      {/* Modal Trigger */}
      <a
        className="waves-effect waves-light btn modal-trigger"
        href="#credentials-modal"
      >
        Click Here
      </a>
      {/* Modal Structure */}
      <div id="credentials-modal" className="modal">
        <div className="modal-content">
          <p className="landing__credentials">
            Username is developer test login at gmail dot com, and the password
            is "long passwords are secure" without the spaces.
          </p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Alrighty
          </a>
        </div>
      </div>
    </div>
  );
};
