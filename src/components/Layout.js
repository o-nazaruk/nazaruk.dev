import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

import "/assets/scss/Reset.scss";
import "/assets/scss/Typography.scss";
// import menuIcon from "/assets/images/Menu-left.svg";
import { ReactComponent as MenuIcon } from "/assets/images/Menu-left.svg";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  openMenu(event) {
    event.stopPropagation();
    event.target.parentElement.classList.toggle("open");
  }
  closeMenu(event) {
    document.querySelector(".menu").classList.remove("open");
  }

  render(props) {
    return (
      <Container onClick={this.closeMenu}>
        <div className="menu">
          <div className="items">
            <ul>
              <li className="display small">Home</li>
              <li className="display small">Portfolio</li>
              <li className="display small">Contact me</li>
            </ul>
          </div>

          <MenuIcon onClick={this.openMenu} />
        </div>

        {this.props.children}
      </Container>
    );
  }
}

export default Layout;
