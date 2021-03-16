import React from "react";
import mainImage from "/assets/images/Saly-1.png";
import LightSpeed from "react-reveal/LightSpeed";
import Spin from "react-reveal/Spin";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <h1 className="theming">Some super cool quote</h1>
        <LightSpeed left>
          <img src={mainImage} alt="" />
        </LightSpeed>
      </div>
    </div>
  );
};

export default Main;
