import React from "react";

import "./ExperienceTile.css";

const EXPANDED_CLASSNAME = "expanded";

class ExperienceTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
      title: props.title,
      dates: props.dates,
      summary: props.summary,
      technologies: props.technologies,
      details: props.details,
      identifier: Math.random().toString(36).substr(2, 9),
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    var toggleIcon = document.getElementById("arrow-" + this.state.identifier);
    var bulletsContainer = document.getElementById(
      "container-" + this.state.identifier
    );
    var bullets = document.getElementById("bullets-" + this.state.identifier);
    if (!toggleIcon.classList.contains(EXPANDED_CLASSNAME)) {
      // expanding
      bulletsContainer.style.height = bullets.scrollHeight + "px";

      toggleIcon.classList.remove("two");
      void toggleIcon.offsetWidth; // triggers reflow to reset animation
      toggleIcon.classList.add("one");
    } else {
      // collapsing
      bulletsContainer.style.height = "0";

      toggleIcon.classList.remove("one");
      void toggleIcon.offsetWidth;
      toggleIcon.classList.add("two");
    }
    toggleIcon.classList.toggle(EXPANDED_CLASSNAME);
  }

  render() {
    return (
      <div class="experience-tile">
        <div class="experience-company">{this.state.company}</div>
        <div class="experience-container-top">
          <div class="experience-title">{this.state.title}</div>
          <div class="experience-dates">{this.state.dates}</div>
        </div>

        <div class="experience-container-bottom">
          <div class="experience-summary">{this.state.summary}</div>
        </div>

        <div class="experience-container-middle">
          {this.state.details != null && this.state.details.length > 0 ? (
            <div class="center-contents">
              <div
                class="experience-bullets-toggle"
                id={"toggle-" + this.state.identifier}
                title="Expand"
                onClick={this.toggle}
              >
                <i
                  class="fa fa-chevron-down toggle-arrow"
                  id={"arrow-" + this.state.identifier}
                ></i>
              </div>
            </div>
          ) : null}
          <div class="experience-technologies">
            {this.state.technologies.join(", ")}
          </div>
        </div>

        <div
          class={"experience-bullets-container " + EXPANDED_CLASSNAME}
          id={"container-" + this.state.identifier}
        >
          <div
            class="experience-bullets"
            id={"bullets-" + this.state.identifier}
          >
            {this.state.details.map((bullet, index) => (
              <li key={index}>
                <span>{bullet}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceTile;
