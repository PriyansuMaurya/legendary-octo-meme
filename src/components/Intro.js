// import './App.css';
import Greeting from "./Greeting";

function Intro(props) {
  return (
    <section id="Home">
      <div className="intro-container">
        <div className="about" style={{ backgroundColor: props.bg }}>
          <h1>#Home</h1>
          <Greeting classN="greeting" />
          <div className="under-construction">
          🔨
          <p>Under Construction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
