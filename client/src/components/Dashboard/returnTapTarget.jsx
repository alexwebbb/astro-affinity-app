import React from "react";

const tapTargetText = [
  {
    title: "Welcome to the Astrological Affinities App!",
    text:
      "The purpose of this app is to compare different people based on their astrological signs. Please click here to create a profile."
  },
  {
    title: "Great Job!",
    text: "Now lets create a second profile which we can compare to the first."
  },
  {
    title: "Almost there!",
    text:
      "Lets make one more profile, so we can have a little competition for our match. With this many profiles, you can't use the sort buttons!"
  }
];

export default activeIndex => {
  if (activeIndex < tapTargetText.length) {
    const { title, text } = tapTargetText[activeIndex];
    return (
      <div className="tap-target" data-target="newProfile">
        <div className="tap-target-content white-text">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    );
  }
};
