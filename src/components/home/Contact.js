import React, { Component, createRef } from "react";
import contactImage from "/assets/images/Saly-25.png";
import { ReactComponent as Username } from "/assets/images/softies/username.svg";
import { ReactComponent as Email } from "/assets/images/softies/Search.svg";
import { ReactComponent as Reply } from "/assets/images/softies/Comment.svg";
import Zoom from "react-reveal/Zoom";
import Input from "./form/Input";
import Emoji from "react-apple-emojis";

class Contact extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div className="contact">
        <div className="content">
          <Zoom bottom fraction={0.6}>
            <img src={contactImage} alt="" />
          </Zoom>
          <div className="card">
            <h1 className="display small bold center">
              Contact me <Emoji name="writing-hand"></Emoji>
            </h1>
            <form>
              <Input
                svg={<Username />}
                label="Your name"
                type="text"
                name="user-name"
              />
              <Input
                svg={<Email />}
                label="Email"
                type="email"
                name="user-email"
              />
              <Input
                textarea={true}
                svg={<Reply />}
                label="Your message"
                type="text"
                name="user-message"
              />
              <input
                type="submit"
                value="Submit"
                className="button large primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
