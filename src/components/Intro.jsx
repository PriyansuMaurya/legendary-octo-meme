// import './App.css';
import Greeting from "./Greeting";
import { useState } from "react";
import Header from "./Header";;

function Intro() {
  const [bg, setBg] = useState(localStorage.getItem("intro_background"));
  
  return (
    <section id="Home" className={ bg } >
      <Header setBg={setBg} />
      <div className="intro-container">
        <img className="entry-image" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/7ad12141-b4c7-4744-bbbe-53979cec3677'} />
        <div className="about">
          <Greeting classN="greeting" />
          <div className="under-construction"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
