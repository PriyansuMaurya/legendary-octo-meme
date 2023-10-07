// import './App.css';
import Greeting from "./Greeting";

import { useState } from "react";
import Header from "./Header";
import useImageLoadChecker from "../hooks/useImageLoadChecker";
import { SplashScreen } from "../pages/SplashScreen";

function Intro() {
  const [bg, setBg] = useState(localStorage.getItem("intro_background"));
  const [loading, setLoading] = useState(true);

  const imagesLoaded = useImageLoadChecker(['../../public/images/untitled5.png']);
  if (!imagesLoaded) {
    return <SplashScreen />;
  }
  // , backgroundImage: `url(${floorTile}) `, 
  return (
    <section id="Home" className={ bg } >
      <Header setBg={setBg} />
      <div className="intro-container">
        {/* <img className="entry-image"style={{height:"600px",width:"600px"}} src={iphone} /> */}
        <img className="entry-image" src={'../../public/images/untitled5.png'} />
        <div className="about">
          <Greeting classN="greeting" />

          <div className="under-construction"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
