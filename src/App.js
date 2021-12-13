import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ReactTip from "./components/ReactTip";

import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import "./App.css";
import "./more-styles/Animations.css";

function App() {
  return (
    <div id="content">
      <Navbar />
      <div id="page-contents">
        <div id="sidebar-padding" class="social-item">
          {/* helps center contents, even with sidebar on the other side  */}
          <i class="fab fa-github"></i>
        </div>
        <div id="page-sections">
          <Intro />
          <ReactTip />
          <About />
          <Experience />
          <Projects />
        </div>
        <Sidebar />
      </div>

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
