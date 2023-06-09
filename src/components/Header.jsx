import { createContext, useEffect, useState } from "react";
import "../App.scss";
import resume from "../resume/SOFTWARE ENGINEER.pdf";
import { Button, Grid } from "@nextui-org/react";

function Header(props) {
  
  const setBackgroundCache = (bgcolor) => {
    localStorage.setItem("intro_background", bgcolor);

    props.setBg(localStorage.getItem("intro_background"));
  };

  useEffect(() => {
    if (localStorage.getItem("intro_background")) {
      props.setBg(localStorage.getItem("intro_background"));
    } else {
      props.setBg("blue");
    }
  });
  return (
    <header className="header-container">
      <ul>
        <li>
          <a className="tab" href="#About">
            <Button light size="xs" color="black" auto>
              ABOUT
            </Button>
          </a>
        </li>
        <li>
          <a className="tab" href="#Projects">
            <Button light size="xs" color="black" auto>
              PROJECTS
            </Button>
          </a>
        </li>
        <li>
          <a href={resume} target="_blank">
            <Button
              auto
              size="xs"
              style={{ backgroundColor: "white", color: "black" }}
              icon={
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
              }
              filled
            >
              RESUME
            </Button>
          </a>
        </li>

        <div className="color-controls">
          <div
            className="window-control red"
            onClick={() => setBackgroundCache("red")}
          />
          <div
            className="window-control yellow"
            onClick={() => setBackgroundCache("yellow")}
          />
          <div
            className="window-control blue"
            onClick={() => setBackgroundCache("blue")}
          />
        </div>
      </ul>
    </header>
  );
}

export default Header;
