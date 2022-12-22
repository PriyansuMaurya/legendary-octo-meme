// import './App.css';
import Greeting from "./Greeting";
import tenzoz from "./images/tenzoz1.png";
import abstract from "./images/abstract.png";
import chess from "./images/chess.png";

function Intro(props) {
  return (
    <section id="Home">
      <div className="intro-container" style={{ backgroundColor: props.bg }}>
        <img className="entry-image"style={{height:"450px",width:"450px"}} src={abstract} />
        <div className="about" >
          <h1>#Home</h1>
          <Greeting classN="greeting" />
          <div className="under-construction"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
