import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <div id="content">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />

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
