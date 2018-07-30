import React from "react";

export default (text, href) => {
  return (
    <a href={"https://" + href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};
