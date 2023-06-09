import "../App.scss";

import Intro from "../components/Intro";
// import ContactMe from './components/ContactMe';
import Footer from "../components/Footer";
import ProjectGlimpse from "../components/ProjectGlimpse";
import "../scrollbar.css";
import About from "../components/About";
import Projects from "../components/Projects";
import GoBack from "../components/Goback";
import { useState } from "react";
import TechLearning from "../components/TechLearning";
import { Spacer, Card } from "@nextui-org/react";
function App() {
  const [bg, setBg] = useState("#7a90df");

  return (
    <div className="App">
      <Intro />

      <Projects />

      {/* <ProjectGlimpse reverse="row-reverse" project="Project 1" /> */}
      {/* <ProjectGlimpse reverse="" project="Project 2" /> */}
      <div className="teach-about" id="teach-about">
        <TechLearning />
        {/* <TechLearning /> */}
        {/* <Spacer x={2} /> */}
        <About />
      </div>

      <Footer />

      <GoBack />
    </div>
  );
}

export default App;
