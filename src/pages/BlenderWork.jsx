import React from "react";
import "../App.scss";

import useImageLoadChecker from "../hooks/useImageLoadChecker";
import { SplashScreen } from "./SplashScreen";

export default function BlenderWork() {
  const photos = ['../../public/images/iphone_11_commercial.png', '../../public/images/room.png', '../../public/images/chess.png', '../../public/images/abstract.png', '../../public/images/tenzoz1.png'];
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
        <img id="iphone" src={'../../public/images/iphone_11_commercial.png'} />
        <img id="room" src={'../../public/images/room.png'} />
        <img id="chess" src={'../../public/images/chess.png'} />
        <img id="abstract" src={'../../public/images/abstract.png'} />
        <img id="tenzoz1" src={'../../public/images/tenzoz1.png'} />
        {/* "https://diagram.com/assets/magician/magician-horizontal.png" */}
        {/* <div className="pimage-slider"></div> */}
      </div>
    </div>
  );
}
