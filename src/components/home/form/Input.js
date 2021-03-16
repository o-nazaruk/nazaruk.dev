import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    value: "",
  };

  handleChange(event) {
    if (event.target.value != "") {
      event.target.parentNode.classList.add("typed");
    } else {
      event.target.parentNode.classList.remove("typed");
    }
    this.setState({ value: event.target.value });
  }

  render() {
    let input,
      additionalClass = "";
    if (!this.props.textarea) {
      input = (
        <input
          className="input"
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleChange}
        />
      );
    } else {
      additionalClass = "textarea";
      input = (
        <textarea
          className="input"
          type={this.props.type}
          name={this.props.name}
          onChange={this.handleChange}
        />
      );
    }
    return (
      <label className={"text small " + additionalClass}>
        <div className="float">
          {this.props.svg} <div> {this.props.label}</div>
        </div>
        {input}
      </label>
    );
  }
}

export default Input;
