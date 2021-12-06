import Section from "../components/Section";
import Resume from "../assets/Resume.pdf";

function Experience() {
  return (
    <Section
      elementId="work-section"
      colored={true}
      title="Work Experience"
      children={
        <div>
          {"(Or, download a PDF resume "}
          <a class="formatted" href={Resume} target="_blank">
            here
          </a>
          ).
          <div class="experience-tiled"></div>
        </div>
      }
    />
  );
}

export default Experience;
