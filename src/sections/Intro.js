import pfp from "../assets/pfp.jpg";
import Section from "../components/Section";

import "./Intro.css";

function Intro() {
  return (
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
  );
}

export default Intro;
