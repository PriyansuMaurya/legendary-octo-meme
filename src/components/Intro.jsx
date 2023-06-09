// import './App.css';
import Greeting from "./Greeting";
import tenzoz from "../images/tenzoz1.png";
import abstract from "../images/abstract.png";
import iphone from "../images/untitled5.png";
import floorTile from "../images/floor-tile.png";

import { useState } from "react";
import Header from "./Header";
import useImageLoadChecker from "../hooks/useImageLoadChecker";
import { SplashScreen } from "../pages/SplashScreen";

function Intro() {
  const [bg, setBg] = useState(localStorage.getItem("intro_background"));
  const [loading, setLoading] = useState(true);

  const imagesLoaded = useImageLoadChecker([iphone]);
  if (!imagesLoaded) {
    return <SplashScreen />;
  }
  // , backgroundImage: `url(${floorTile}) `, 
  return (
    <section id="Home" className={ bg } >
      <Header setBg={setBg} />
      <div className="intro-container">
        {/* <img className="entry-image"style={{height:"600px",width:"600px"}} src={iphone} /> */}
        <img className="entry-image" src={iphone} />
        <div className="about">
          <Greeting classN="greeting" />

          <div className="under-construction"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
