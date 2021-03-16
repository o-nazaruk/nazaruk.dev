import React from "react";
import portfolioImage from "/assets/images/Saly-12.png";
import placeholderImage from "/assets/images/Olive-Leaves.jpg";

import Pulse from "react-reveal/Pulse";
import Emoji from "react-apple-emojis";

// TODO: Transform portfolio items into component

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="content">
        <div className="container">
          <div className="card large">
            <div className="info">
              <h1 className="display small bold">
                Random chat <Emoji name="game-die"></Emoji>
              </h1>
              <p className="text large">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="image">
              <img src={placeholderImage} alt="Random chat image" />
            </div>
          </div>
          <div className="card small">
            <div className="image">
              <img src={placeholderImage} alt="Portfolio" />
            </div>
            <div className="info">
              <h1 className="display small bold">
                Other <Emoji name="speech-balloon"></Emoji>
              </h1>
            </div>
          </div>
          <div className="card small">
            <div className="image">
              <img src={placeholderImage} alt="Portfolio" />
            </div>
            <div className="info">
              <h1 className="display small bold">
                Other <Emoji name="speech-balloon"></Emoji>
              </h1>
            </div>
          </div>
        </div>

        <Pulse forever={true} duration={6000} fraction={1.0}>
          <img src={portfolioImage} alt="" />
        </Pulse>
      </div>
    </div>
  );
};

export default Portfolio;
