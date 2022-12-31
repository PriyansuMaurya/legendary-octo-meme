import { createContext, useEffect, useState } from "react";
import "../App.scss";
import resume from "../resume/SOFTWARE ENGINEER.pdf";
function Header(props) {
  // const [bg, setBg] = useState("#89cff0");
  const setBackgroundCache = (bgcolor) => {
    localStorage.setItem("intro_background", bgcolor);

    props.setBg(localStorage.getItem("intro_background"));
  };

  useEffect(() => {
    if (localStorage.getItem("intro_background")) {
      props.setBg(localStorage.getItem("intro_background"));
    }else{
      props.setBg("#023535");
    }
  });
  return (
    <header className="header-container">
      <ul>
        <li>
          <a className="tab" href="#Home">
            HOME
          </a>
        </li>
        <li>
          <a className="tab" href="#About">
            ABOUT
          </a>
        </li>
        <li>
          <a className="tab" href="#Projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="tab" href="#Glimse">
            GLIMES
          </a>
        </li>
        <li>
          <a href={resume}>
            <button className="resume-btn btn-16">
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
              <div className="resume-text">RESUME</div>
            </button>
          </a>
        </li>

        <div
          className="window-control red"
          onClick={() => setBackgroundCache("#505c69")}
        />
        <div
          className="window-control yellow"
          onClick={() => setBackgroundCache("#231648")}
        />
        <div
          className="window-control green"
          onClick={() => setBackgroundCache("#3e9795")}
        />
        <div
          className="window-control blue"
          onClick={() => setBackgroundCache("#015958")}
        />
        <div
          className="window-control darkblue"
          onClick={() => setBackgroundCache("#023535")}
        />
      </ul>
    </header>
  );
}

export default Header;
