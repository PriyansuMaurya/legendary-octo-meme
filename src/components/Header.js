import { createContext, useState } from "react";
import "../App.css";
import download from './logos/download.png';

function Sidebar(props) {
  // const [bg, setBg] = useState("#89cff0");

  return (
    <header className="App-header">

      <div class="et-hero-tabs-container">
        <ul>
          <li>
            <a class="et-hero-tab" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a class="et-hero-tab" href="#About">About</a>
          </li>
          <li>
            <a class="et-hero-tab" href="#Projects">Projects</a>
          </li>
          <li>
            <a class="et-hero-tab" href="#Glimse">Glimes</a>
          </li> 
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">
              <img style={{
                height: "18px",
                width: "18px",
                paddingRight:"0px"
              }} src={download} />
            </a>
          </li>
          <div
            className="window-control red"
            onClick={() => props.setBg("red")}
          />
          <div
            className="window-control yellow"
            onClick={() => props.setBg("#f2bc57")}
          />
          <div
            className="window-control green"
            onClick={() => props.setBg("#6bb358")}
          />
          <div
            className="window-control blue"
            onClick={() => props.setBg("#7a90df")}
          />
          <div
            className="window-control darkblue"
            onClick={() => props.setBg("#535893")}
          />
        </ul>
        </div>
    </header>
  );
}

export default Sidebar;
