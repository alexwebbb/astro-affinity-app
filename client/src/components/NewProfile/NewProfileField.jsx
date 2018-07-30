import React from "react";


export default ({ input, label, type, meta: { error, touched } }) => {
  
  if(type === "textarea") {
    return (
      <div className="input-field col s12"  >
          <textarea {...input} id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Description</label>
        </div>
    );
  }
  
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
