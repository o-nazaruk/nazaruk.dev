import React from "react";
import introImage from "/assets/images/Saly-13.png";
import Emoji from "react-apple-emojis";
import Pulse from "react-reveal/Pulse";
import Tada from "react-reveal/Tada";
const Intro = () => {
  return (
    <div className="intro">
      <div className="content">
        <Pulse forever={true} duration={6000} fraction={1.0}>
          <img src={introImage} alt="" />
        </Pulse>
        <div className="card">
          <h2 className="display medium">
            Hi! I am Oleksandr{" "}
            <Tada delay={700} mirror={true}>
              <Emoji name="waving-hand"></Emoji>
            </Tada>
          </h2>
          <p className="text medium">
            Expert Full-stack web developer with 3+ years of experience. I am
            meticulous and am always learning more about my field to both stay
            current and to expand on my skills.{" "}
            <Emoji name="grinning-face"></Emoji>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
