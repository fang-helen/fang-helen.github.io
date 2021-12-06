import "./Navbar.css";

function Navbar() {
  return (
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
  );
}

export default Navbar;
