import React from "react";
import "../App.scss";
import abstract from "./images/abstract.png";
import chess from "./images/chess.png";
import room from "./images/room.png";
import tenzoz1 from "./images/tenzoz1.png";
export default function BlenderWork() {
  return (
    <div>
      <header className="header-blender-container">
        <ul>
          <li>
            <a href="#abstract">Astract</a>
          </li>
          <li>
            <a href="#tenzoz">Tenzoz</a>
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

      <div className="header-blender-image-container">
        <img id="abstract" src={abstract} />
        <img id="tenzoz" src={tenzoz1} /> 
        <img id="chess" src={chess} />{" "}
        <img id="room" src={room} />
        {/* "https://diagram.com/assets/magician/magician-horizontal.png" */}
        {/* <div className="pimage-slider"></div> */}
      </div>
    </div>
  );
}
