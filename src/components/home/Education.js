import React from "react";
import edImage from "/assets/images/Saly-16.png";
import Emoji from "react-apple-emojis";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="content">
        <Fade right fraction={0.8}>
          <img src={edImage} alt="" />
        </Fade>
        <div className="card">
          <h2 className="display medium bold">
            Education{" "}
            <RubberBand delay={1000}>
              <Emoji name="graduation-cap"></Emoji>
            </RubberBand>
          </h2>
          <ul>
            <li>
              <h1 className="display small">
                Kharkiv Computer and Technology college
              </h1>
              <p className="text small">Software devlopment</p>
            </li>
            <li>
              <h1 className="display small">
                Kharkiv National University of Radioelectronics
              </h1>
              <p className="text small">
                Bachelor's degree, Computer science (expected)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
