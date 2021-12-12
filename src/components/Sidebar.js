import SocialLink from "./SocialLink";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar" style={{ top: "0px" }}>
      <SocialLink
        title="Resume"
        url="#work-section"
        target="_self"
        icon={<i class="fas fa-file-alt"></i>}
      />
      <SocialLink
        title="Email"
        url="mailto:helenfang524@gmail.com"
        icon={<i class="fas fa-envelope"></i>}
      />
      <SocialLink
        title="Github"
        url="https://github.com/fang-helen"
        icon={<i class="fab fa-github"></i>}
      />
      <SocialLink
        title="LinkedIn"
        url="https://www.linkedin.com/in/helen-fang/"
        icon={<i class="fab fa-linkedin"></i>}
      />
    </div>
  );
}
export default Sidebar;
