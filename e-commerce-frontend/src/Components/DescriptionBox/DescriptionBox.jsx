import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Deep Cuts and Broken Hearts was created to help with nestalgic needs. Our demographic is aimed towards those who were in their scene/emo phase in the early/mid 2000s and want a chance to get albums they never got a chance to grab or lost... 
        </p>
        <p>
        We get it, it's not a phase and more to follow on more records.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
