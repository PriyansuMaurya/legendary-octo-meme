import "../App.scss";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import "../scrollbar.css";
import About from "../components/About";
import Projects from "../components/Projects";
import GoBack from "../components/Goback";
import { useState } from "react";
import TechLearning from "../components/TechLearning";


function App() {
  const [bg, setBg] = useState("#7a90df");

  return (
    <div className="App">
      <Intro />
      <Projects />
      <div className="teach-about" id="teach-about">
        <TechLearning />
        <About />
      </div>
      <Footer />
      <GoBack />
    </div>
  );
}

export default App;
