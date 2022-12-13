import { createContext, useState } from "react";
import "../App.scss";

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
            <a class="et-hero-tab" href="#About">
              About
            </a>
          </li>
          <li>
            <a class="et-hero-tab" href="#Projects">
              Projects
            </a>
          </li>
          <li>
            <a class="et-hero-tab" href="#Glimse">
              Glimes
            </a>
          </li>
          <li>
            <a href="">
              <button class="resume-btn btn-16">
                <svg
                  className="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"
                  />
                </svg>
                <div className="resume-text">Resume</div>
              </button>
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
