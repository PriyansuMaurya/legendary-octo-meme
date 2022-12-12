import "./App.css";
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

      <section className="et-slide" id="Home">
        <h1>Home</h1>
        <div className="under-construction" style={{ backgroundColor: bg }}>
        <Intro />
        🔨
        <p>Under Construction</p>
      </div>
      </section>
      <section class="et-slide" id="About">
        <h1>About</h1>
        <h3>something about </h3>
      </section>
      <section class="et-slide" id="Projects">
        <h1>Projects</h1>
        <h3>something about </h3>
      </section>

      <section class="et-slide" id="Glimse">
        <h1>Glimse</h1>
        <ProjectGlimpse />
      </section>
  
      {/* <ContactMe/> */}
      <Footer />
    </div>
  );
}

export default App;
