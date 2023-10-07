import React from "react";
import "../App.scss";

export default function BlenderWork() {
  return (
    <div className="blender">
      <header className="header-blender-container">
        <ul>
          <li>
            <a href="#iphone">iPhone</a>
          </li>
          <li>
            <a href="#abstract">Astract</a>
          </li>
          <li>
            <a href="#tenzoz1">Tenzoz</a>
          </li>
          <li>
            <a href="#chess">Chess</a>
          </li>
          <li>
            <a href="#room">Room</a>
          </li>
        </ul>
        <div></div>
      </header>
      ![chess]()
      <div className="header-blender-image-container">
        <img id="iphone" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/dd9c5616-1db3-4a76-b904-841a913e5ffd'} />
        <img id="room" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/89ef2a50-41e6-47ab-95a1-dff7983b837b'} />
        <img id="chess" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/aadf8938-de0a-4532-9325-a0964861fb60'} />
        <img id="abstract" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/4348d14b-4c9e-491f-be80-b8c32cbee236'} />
        <img id="tenzoz1" src={'https://github.com/PriyansuMaurya/priyansu.vercel.app/assets/101447544/fac64568-5b5f-4ed5-b32f-71551c8c3d2c'} />
        {/* "https://diagram.com/assets/magician/magician-horizontal.png" */}
        {/* <div className="pimage-slider"></div> */}
      </div>
    </div>
  );
}
