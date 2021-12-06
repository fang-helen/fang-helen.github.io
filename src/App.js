import pfp from "./assets/pfp.jpg";
import "./App.css";

function App() {
  return (
    <div id="content">
      <div id="header">
        <a href="#about-section" class="header-item">
          About
        </a>
        <a href="#work-section" class="header-item">
          Resume
        </a>
        <a href="#projects-section" class="header-item">
          Projects
        </a>
        <a href="#contact-section" class="header-item">
          Contact
        </a>
      </div>

      <div id="intro-section" class="section colored">
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
      </div>
      <div id="about-section" class="section">
        <div id="about-title" class="section-title">
          About Me
        </div>
        <p>
          I'm currently in the third year of my computer science degree at the
          University of Texas at Austin and an incoming SWE intern at Jane
          Street for summer 2022.
        </p>
        <p>
          I think software engineering is really great because I get to solve
          interesting problems every day! I've completed a couple of SWE
          internships at various tech companies and I enjoy backend and
          full-stack work.
        </p>
        <p>
          I also speak Mandarin fluently, and in my free time I enjoy cooking,
          eating desserts, playing games with friends, and sewing!
        </p>
      </div>
      <div id="work-section" class="section colored">
        <div id="work-title" class="section-title">
          Work Experience
        </div>
        (Or, download a PDF resume
        <a class="formatted" href="files/Resume.pdf" target="_blank">
          here
        </a>
        ).
        <div class="experience-tiled"></div>
      </div>
      <div id="projects-section" class="section">
        <div id="projects-title" class="section-title">
          My Projects
        </div>
      </div>
      <div id="contact-section" class="section colored">
        <div id="contact-title" class="section-title">
          Let's connect!
        </div>
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
      <div id="color-scheme">
        <div class="color one">1</div>
        <div class="color two">2</div>
        <div class="color three">3</div>
        <div class="color four">4</div>
        <div class="color five">5</div>
      </div>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
