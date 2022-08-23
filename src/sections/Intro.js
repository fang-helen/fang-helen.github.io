import pfp from "../assets/images/nyc_cropped.png";

import Section from "../components/Section";
import ResumeButton from "../components/ResumeButton";

import "./Intro.css";

function Intro() {
  return (
    <Section
      elementId="intro-section"
      colored={true}
      children={
        <div id="intro-box" class="center-contents">
          <div id="intro-box-right">
            <img src={pfp} id="pfp" alt="me!" />
            <ResumeButton />
          </div>

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
