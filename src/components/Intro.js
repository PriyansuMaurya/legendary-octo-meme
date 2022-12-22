// import './App.css';
import Greeting from "./Greeting";
import tenzoz from "./images/tenzoz1.png";
import abstract from "./images/abstract.png";
import iphone from "./images/untitled5.png";
import { useState } from "react";
import Header from "./Header";

function Intro() {
  const [bg, setBg] = useState("#7a90df");
  return (
    <section id="Home" style={{ backgroundColor: bg }}>
      <Header setBg={setBg} />
      <div className="intro-container" >
        <img className="entry-image"style={{height:"600px",width:"600px"}} src={iphone} />
        <div className="about" >
        
          <Greeting classN="greeting" />
          
          <div className="under-construction"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
