import React from "react";

import "./ExperienceTile.css";

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
    };
  }

  render() {
    return (
      <div class="experience-tile">
        <div class="experience-company">{this.state.company}</div>
        <div class="experience-title">{this.state.title}</div>
        <div class="experience-dates">{this.state.dates}</div>
        <div class="experience-summary">{this.state.summary}</div>
        <ul>
          {this.state.details.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExperienceTile;
