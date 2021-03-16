import React from "react";
import techImage from "/assets/images/Saly-23.png";
import Emoji from "react-apple-emojis";
import ProgressBar from "./ProgressBar";

class Technologies extends React.Component {
  render() {
    let progress = new ProgressBar({ Hey: "123" });
    return (
      <div className="tech">
        <div className="content">
          <img src={techImage} alt="" />
          <div className="card">
            <h2 className="display medium bold">
              Technologies <Emoji name="man-technologist"></Emoji>
            </h2>
            <div className="bars">
              <ProgressBar name="HTML5/CSS3" progress="85" delay="1000" />
              <ProgressBar name="PHP/MYSQL" progress="87" delay="1100" />
              <ProgressBar name="JAVASCRIPT" progress="82" delay="1200" />
              <ProgressBar name="WORDPRESS" progress="92" delay="1300" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
