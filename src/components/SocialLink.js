import React from "react";

import "./Socials.css";

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      url: props.url,
      icon: props.icon,
    };
  }

  render() {
    return (
      <div class="social-item">
        <a
          class="social-link"
          href={this.state.url}
          title={this.state.title}
          target="_blank"
          rel="noreferrer"
        >
          {this.state.icon}
        </a>
      </div>
    );
  }
}

export default SocialLink;
