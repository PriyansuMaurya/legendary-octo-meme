import React, { useEffect, useState } from "react";

export default function Greeting(props) {
  const date = new Date();
  const hours = date.getHours();
  const [greetingPrefix, setGreetingPrefix] = useState("");
  const [firstname, setFirstname] = useState("");
  useEffect(() => {
    // setFirstname(localStorage.getItem("summerx_username").split(" ")[0]);
    if (hours > 11 && hours < 16) {
      setGreetingPrefix(`afternoon `);
    } else if (hours > 15 && hours < 24) {
      setGreetingPrefix(`evening `);
    } else {
      setGreetingPrefix(`morning`);
    }
  });

  return (
    <div className={props.classN}>
      <span style={{ marginRight: "20px" }}>
        Good
        <br />
        {greetingPrefix},
      </span>
      <h2 className="wordCarousel">
      It's 
        <div>
          <ul className="flip5">
            <li><h2>Priyanshu</h2></li>
            <li><h2>iPhone</h2></li>
            <li><h2>Priyanshu</h2></li>
            <li><h2>iPhone</h2></li>
            <li><h2>Priyanshu</h2></li>
            <li><h2>iPhone</h2></li>
          </ul>
        </div>
      </h2>
    </div>
  );
}
