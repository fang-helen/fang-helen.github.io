import pfp from "../assets/nyc_cropped.png";

import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

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

            <div id="socials-links-intro">
              <SocialLink
                url="mailto:helenfang524@gmail.com"
                icon={<i class="fas fa-envelope"></i>}
              />
              <SocialLink
                url="https://github.com/fang-helen"
                icon={<i class="fab fa-github"></i>}
              />
              <SocialLink
                url="https://www.linkedin.com/in/helen-fang/"
                icon={<i class="fab fa-linkedin"></i>}
              />
            </div>
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
