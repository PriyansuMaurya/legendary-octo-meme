import React from "react";
import "../App.scss";
import abstract from "../images/abstract.png";
import chess from "../images/chess.png";
import room from "../images/room.png";
import tenzoz1 from "../images/tenzoz1.png";
import iphone from "../images/iphone_11_commercial.png";

import useImageLoadChecker from "../hooks/useImageLoadChecker";
import { SplashScreen } from "./SplashScreen";

export default function BlenderWork() {
  const photos = [iphone, room, chess, abstract, tenzoz1];
  const imagesLoaded = useImageLoadChecker(photos);
  if (!imagesLoaded) {
    return <SplashScreen />;
  }
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

      <div className="header-blender-image-container">
        <img id="iphone" src={iphone} />
        <img id="room" src={room} />
        <img id="chess" src={chess} />
        <img id="abstract" src={abstract} />
        <img id="tenzoz1" src={tenzoz1} />
        {/* "https://diagram.com/assets/magician/magician-horizontal.png" */}
        {/* <div className="pimage-slider"></div> */}
      </div>
    </div>
  );
}
