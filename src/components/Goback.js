import React from "react";
import { useEffect, useState } from "react";

export default function Goback(props) {
  const [visible, setVisible] = useState("");
  const [setColor, color] = useState("black");
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 1500) {
      setVisible("");
      setColor("black");
    } else {
      setVisible("none");
      // setColor("white");

    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="switch" style={{ display: visible }}>
      <div className="circle">
        <a href="#Home">
          <svg
            style={{ color: color }}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(90 12 12)">
              <path
                d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
