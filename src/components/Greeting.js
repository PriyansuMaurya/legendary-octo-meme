import React, { useEffect, useState } from "react";

export default function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  const [greetingPrefix, setGreetingPrefix] = useState("");
  const [firstname, setFirstname] = useState("");
  useEffect(() => {
    // setFirstname(localStorage.getItem("summerx_username").split(" ")[0]);
    if (hours > 11 && hours < 16) {
      setGreetingPrefix(`Good afternoon, `);
    } else if (hours > 15 && hours < 24) {
      setGreetingPrefix(`Good evening, `);
    } else {
      setGreetingPrefix(`Good morning, `);
    }
  });

  return (
    <div>
        <p >{greetingPrefix}</p>
        {/* <p >{firstname}</p> */}
    </div>
  );
}
