import Section from "../components/Section";
import Resume from "../assets/Resume.pdf";

import ExperienceTile from "../components/ExperienceTile";

import "./Experience.css";

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
          <ExperienceTile
            company="Meta (Facebook)"
            title="SWE Intern"
            dates="Aug 2021 - Nov 2021"
            summary="Built out a new feature from end‑to‑end to set custom product
              cover images in creator collections on Instagram Shops."
            technologies={["Hack/PHP", "Python Django"]}
            details={[
              "Created a new database schema to support the feature and collaborated with other engineers, " +
                "both within and outside immediate team, to integrate it with other Shops backend infrastructure.",
              "Implemented full frontend flow by adding UI elements and async controllers using Bloks, a server‑side rendering framework.",
              "Adapted Django endpoint to more flexibly query product media.",
            ]}
          />
          <ExperienceTile
            company="Slack Technologies"
            title="SWE Intern"
            dates="May 2021 - Aug 2021"
            summary="Completed two projects to improve the scalability, transparency, and accuracy of the Grid migrations estimates ecosystem."
            technologies={["Hack/PHP", "XHP", "MySQL"]}
            details={[
              "Restructured the Enterprise Grid migrations framework to ensure duration estimates are front‑of‑mind " +
                "and easily accounted for during development, improving scalability and accuracy for a system that " +
                "represents $84M in ARR (18% of Slack Enterprise APR).",
              "Designed and developed a tool to keep track of duration estimates in a MySQL table and alert of " +
                "significant updates for scheduled migrations, in order to enhance transparency and streamline the " +
                "migration process for both Slack representatives and customers",
            ]}
          />
          <ExperienceTile
            company="UT Department of Computer Science"
            title="Undergraduate Teaching Assistant"
            dates="Jan 2021 - May 2021"
            summary="Worked as teaching assistant for CS313E, a data structures and algorithms course taught in Python."
            technologies={["Python"]}
            details={[
              "Wrote unit test cases and autograding scripts for student assignments and exams.",
              "Held triweekly office hours to help students debug code.",
              "Frequently interacted with students on Piazza to discuss concepts and answer questions, totaling 889 contributions over the semester.",
            ]}
          />
          <ExperienceTile
            company="Google"
            title="STEP Intern"
            dates="May 2020 - Aug 2020"
            summary="Used Google Cloud APIs to build full-stack web applications."
            technologies={[
              "HTML",
              "CSS",
              "Java",
              "Google Cloud",
              "Apache Spark",
            ]}
            details={[
              "Implemented an interactive portfolio page where visitors can add comments and translate content.",
              "Worked closely with two other interns to design and develop a web application to search for, save, and " +
                "create events within users’ communities. Utilized Apache Spark to create a recommendation system that " +
                "combines collaborative and content‐based filtering to suggest events to users.",
              "Engaged in an end-to-end software development cycle, including creating design docs, writing code, " +
                "mocking objects and adding unit tests, setting up continuous integration, and completing code reviews.",
            ]}
          />
          <ExperienceTile
            company="Sanger Learning Center (UT School of Undergraduate Studies)"
            title="Tutor"
            dates="Jan 2020 - Dec 2020"
            summary="Tutored other undergraduate students in data structures, linear algebra, and calculus."
            technologies={[]}
            details={[]}
          />
        </div>
      }
    />
  );
}

export default Experience;
