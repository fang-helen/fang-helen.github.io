import React from "react";

import "./ProjectTile.css";

class ProjectTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      subtitle: props.subtitle,
      bullets: props.bullets,
      link: props.link,
      image: props.image,
    };
  }

  render() {
    return (
      <div class="project-tile-square">
        <div class="project-tile-overlay">
          <img class="project-image" src={this.state.image} alt="" />
          <div class="project-overlay-text">
            <div class="project-title">{this.state.title}</div>
            <div class="project-subtitle">{this.state.subtitle}</div>
          </div>
        </div>
        <div class="project-tile-contents">
          {this.state.bullets.map((bullet, index) => (
            <li key={index}>
              <span>{bullet}</span>
            </li>
          ))}
          <div class="project-link-container">
            {this.state.link != null ? (
              <a
                class="project-link"
                href={this.state.link}
                title={this.state.title}
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
