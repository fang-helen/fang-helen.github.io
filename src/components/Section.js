import React from "react";

import "./Section.css";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.elementId,
      colored: props.colored,
      children: props.children,
      title: props.title,
    };
  }

  render() {
    return (
      <div
        id={this.state.id}
        class={"section" + (this.state.colored ? " colored" : "")}
      >
        {this.state.title ? (
          <div class="section-title">{this.state.title}</div>
        ) : null}
        {this.state.children}
      </div>
    );
  }
}

export default Section;
