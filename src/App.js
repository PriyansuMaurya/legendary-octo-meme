import "./App.scss";
import Intro from "./components/Intro";
import Header from "./components/Header";
// import ContactMe from './components/ContactMe';
import Footer from "./components/Footer";
import { useState } from "react";
import ProjectGlimpse from "./components/ProjectGlimpse";
import "./scrollbar.css";
function App() {
  const [bg, setBg] = useState("#7a90df");

  return (
    <div className="App">
      <Header setBg={setBg} />
      <Intro bg={bg} />

      <section className="slide" id="About">
        <h1>About</h1>
      </section>
      <section className="slide" id="Projects">
        <h1>Projects</h1>
      </section>

      <section className="slide" id="Glimse">
        <h1>Glimse</h1>
        <ProjectGlimpse reverse="row-reverse" project="Project 1" />
        <ProjectGlimpse reverse="" project="Project 2" />
      </section>

      {/* <ContactMe/> */}
      <Footer />

      <div class="switch">
        <div className="circle">
          <svg
            style={{color:bg}}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(90 12 12)">
              <path
                fill="currentColor"
                d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
