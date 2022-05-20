import SocialLink from "./SocialLink";
import Resume from "../assets/documents/Resume.pdf";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar">
      <div id="sidebar-tip">Find me @ </div>
      <SocialLink
        title="Resume (PDF)"
        url={Resume}
        icon={<i class="fas fa-file-pdf"></i>}
      />
      <SocialLink
        title="Email"
        url="mailto:helenfang524@gmail.com"
        icon={<i class="fas fa-envelope" style={{ fontSize: "0.9em" }}></i>}
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
