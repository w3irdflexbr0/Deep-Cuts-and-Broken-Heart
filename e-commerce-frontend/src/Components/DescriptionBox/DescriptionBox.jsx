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
          Deep Cuts and Broken Hearts was made for those who miss the past and held on. To those who said "it wasn't a phase". 
        </p>
        <p>
        Whether its the underground deathcore you moshed to, whether it's the emo songs you listened to after your ex dumped you, whether its the metalcore songs you listened to on your way to your local Blockbuster. We have it all on Deep Cuts and Broken Hearts and ready to bring back that nostalgia feeling.
      </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
