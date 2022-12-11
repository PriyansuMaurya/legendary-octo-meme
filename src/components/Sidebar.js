import { createContext, useState } from "react";
import "../App.css";

function Sidebar(props) {
  // const [bg, setBg] = useState("#89cff0");

  return (
    <div className="glass">
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
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
  );
}

export default Sidebar;
