import pfp from "./assets/pfp.jpg";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

import "./App.css";

function App() {
  return (
    <div id="content">
      <Navbar />
      <Section
        elementId="intro-section"
        colored={true}
        children={
          <div id="intro-box">
            <img src={pfp} id="pfp" alt="a picture of me!" />

            <div id="blurb-box">
              <div id="intro-greeting">Hi! I'm</div>
              <div id="intro-title" class="section-title">
                Helen Fang
              </div>

              <div class="blurb one">Computer Science @ UT Austin</div>
              <div class="blurb two">Software Engineer</div>
            </div>
          </div>
        }
      />
      <Section
        elementId="about-section"
        title="About Me"
        children={
          <div id="about-content">
            <p>
              I'm currently in the third year of my computer science degree at
              the University of Texas at Austin and an incoming SWE intern at
              Jane Street for summer 2022.
            </p>
            <p>
              I think software engineering is really great because I get to
              solve interesting problems every day! I've completed a couple of
              SWE internships at various tech companies and I enjoy backend and
              full-stack work.
            </p>
            <p>
              I also speak Mandarin fluently, and in my free time I enjoy
              cooking, eating desserts, playing games with friends, and sewing!
            </p>
          </div>
        }
      />
      <Section
        elementId="work-section"
        colored={true}
        title="Work Experience"
        children={
          <div>
            {"(Or, download a PDF resume "}
            <a class="formatted" href="files/Resume.pdf" target="_blank">
              here
            </a>
            ).
            <div class="experience-tiled"></div>
          </div>
        }
      />
      <Section elementId="projects-section" title="My Projects" />
      <Section
        elementId="contact-section"
        colored={true}
        title="Lets connect!"
        children={
          <div>
            <a
              href="mailto:helenfang524@gmail.com"
              class="contact-link"
              target="_blank"
            >
              helenfang524@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/helen-fang/"
              class="contact-link"
              target="_blank"
            >
              www.linkedin.com/in/helen-fang
            </a>
          </div>
        }
      />

      <div id="color-scheme">
        <div class="color one">1</div>
        <div class="color two">2</div>
        <div class="color three">3</div>
        <div class="color four">4</div>
        <div class="color five">5</div>
      </div>
    </div>
  );
}

export default App;
