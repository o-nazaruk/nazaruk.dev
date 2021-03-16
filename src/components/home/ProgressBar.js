import React from "react";
import Fade from "react-reveal/Fade";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }
  render() {
    return (
      <div className="progress">
        <p className="text large">{this.props.name}</p>
        <div className="bar">
          <Fade left delay={this.props.delay}>
            <div
              className="prog"
              style={{ width: this.props.progress + "%" }}
            ></div>
          </Fade>
        </div>
        <div className="desc">
          <p className="text medium">
            <span className="bold">{this.props.progress}%</span> explored
          </p>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
