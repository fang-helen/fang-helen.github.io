import React from "react";

import "./SocialLink.css";

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      icon: props.icon,
    };
  }

  render() {
    return (
      <div class="social-item">
        <a class="social-link" href={this.state.url} target="_blank">
          {this.state.icon}
        </a>
      </div>
    );
  }
}

export default SocialLink;
