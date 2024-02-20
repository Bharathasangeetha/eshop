import React from "react";
import heroimage from "../Assets/hero_image.png";
import handicon from "../Assets/hand_icon.png";
import arrowicon from "../Assets/arrow.png";
import "./Models.css";
const Models = () => {
  return (
    <div className="model">
      <div className="model-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img src={handicon} alt="" />
                      </div>
                      <p>Collection</p>
            <p>for everyone</p>
        </div>
        <div className="latest">
        <div>Latest Collection</div>
        <img src={arrowicon} alt="" />
      </div>
      </div>
      

      <div className="model-right">
        <img src={heroimage} alt="" />
      </div>
    </div>
  );
};

export default Models;
