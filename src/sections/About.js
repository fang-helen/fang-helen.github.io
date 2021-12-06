import Section from "../components/Section";

function About() {
  return (
    <Section
      elementId="about-section"
      title="About Me"
      children={
        <div id="about-content">
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
      }
    />
  );
}

export default About;
