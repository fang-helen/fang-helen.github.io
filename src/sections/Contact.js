import Section from "../components/Section";

import "./Contact.css";

function Contact() {
  return (
    <Section
      elementId="contact-section"
      colored={true}
      title="Lets connect!"
      children={
        <div id="contact-links">
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
  );
}

export default Contact;
