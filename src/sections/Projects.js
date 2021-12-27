import Section from "../components/Section";
import ProjectTile from "../components/ProjectTile";

import "./Projects.css";

function Projects() {
  return (
    <Section
      elementId="projects-section"
      title="My Projects"
      children={
        <div id="projects-container">
          <ProjectTile title="Polymesh Subdivider" />
          <ProjectTile title="PintOS" />
          <ProjectTile title="UniteBySTEP" />
          <ProjectTile title="Hingle Basin" />
        </div>
      }
    />
  );
}

export default Projects;
