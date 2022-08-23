import Section from "../components/Section";
import Resume from "../assets/documents/Resume.pdf";

import ExperienceTile from "../components/ExperienceTile";

function Experience() {
  return (
    <Section
      elementId="work-section"
      colored={true}
      title="Work Experience"
      children={
        <div>
          {"(Or, download a PDF resume "}
          <a class="formatted" href={Resume} target="_blank" rel="noreferrer">
            here
          </a>
          ).
          <ExperienceTile
            company="Jane Street"
            title="SWE Intern"
            dates="May 2022 - Aug 2022"
            summary="Worked a tool to infer metadata for datasets used for trading and research while on the Research Infra team
              and added features to Webs3, an internal tool used widely by trading desks across the firm, while on the International
              ETFs trading desk."
            technologies={["OCaml"]}
            details={[
              "Implemented an RPC protocol and command-line interface for inferring column schemas and other metadata " +
                "for .csv and .parquet datasets and Postgres databases, streamlining data ingestion. (Research Infra)",
              "Extended syntax for Webs3 user-defined modules to enable flagging functions and variables for logging. " +
                "Created a micro-service to poll for updates in logging config files and display this on the UI. (International ETFs)",
              "Added syntax highlighting to editing windows on the Webs3 web interface using CodeMirror. (International ETFs)",
            ]}
          />
          <ExperienceTile
            company="Meta (Facebook)"
            title="SWE Intern"
            dates="Aug 2021 - Nov 2021"
            summary="Built out a new feature from end‑to‑end to set custom product
              cover images in creator collections on Instagram Shops."
            // https://techcrunch.com/2021/10/22/instagram-rolls-out-new-tools-for-creators-to-collaborate-and-partner-with-brands/
            technologies={["Hack/PHP", "Python Django"]}
            details={[
              "Created a new database schema to support the feature and collaborated with other engineers, " +
                "both within and outside immediate team, to integrate it with other Shops backend infrastructure.",
              "Implemented full in-app flow by adding UI elements and async controllers using Bloks, a server‑side " +
                "rendering framework.",
              "Adapted a Django endpoint to more flexibly query product media.",
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
            dates="Jan 2021 - May 2022"
            summary="Worked as teaching assistant for CS313E, a data structures and algorithms course taught in Python."
            technologies={["Python"]}
            details={[
              "Wrote test cases and autograding scripts for student assignments and exams, as well as designed exam questions.",
              "Held biweekly office hours to help students debug code.",
              "Frequently interacted with students on Piazza to discuss concepts and answer questions.",
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
                "create events within users’ communities.",
              "Utilized Apache Spark to create a recommendation system that " +
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
