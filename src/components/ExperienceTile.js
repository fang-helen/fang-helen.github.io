import React from "react";

import "./ExperienceTile.css";

const TOGGLED_CLASSNAME = "collapsed";

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
    var toggleIcon = document.getElementById("toggle-" + this.state.identifier);
    var bulletsContainer = document.getElementById(
      "container-" + this.state.identifier
    );
    var bullets = document.getElementById("bullets-" + this.state.identifier);
    if (!toggleIcon.classList.contains(TOGGLED_CLASSNAME)) {
      toggleIcon.classList.add(TOGGLED_CLASSNAME);
      bulletsContainer.style.height = bullets.scrollHeight + "px";
    } else {
      toggleIcon.classList.remove(TOGGLED_CLASSNAME);
      bulletsContainer.style.height = "0";
    }
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
          {/* <div class="experience-container-small"></div> */}
          <div class="experience-summary">{this.state.summary}</div>
        </div>

        <div class="experience-container-middle">
          <div class="experience-technologies">
            {this.state.technologies.join(", ")}
          </div>
        </div>

        <div
          class={"experience-bullets-container " + TOGGLED_CLASSNAME}
          id={"container-" + this.state.identifier}
        >
          <div
            class="experience-bullets"
            id={"bullets-" + this.state.identifier}
          >
            {this.state.details.map((bullet) => (
              <li>
                <span>{bullet}</span>
              </li>
            ))}
          </div>
        </div>
        {this.state.details != null && this.state.details.length > 0 ? (
          <div class="center-contents">
            <div
              class="experience-bullets-toggle"
              id={"toggle-" + this.state.identifier}
              onClick={this.toggle}
            >
              {
                // todo: add decorator
              }
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ExperienceTile;
