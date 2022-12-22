import React, { useState } from "react";

export default function ProjectGlimpse(props) {
  return (
    <div>
      <div
        className="pimage-container"
        style={{ flexDirection: props.reverse }}
      >
        <div className="pimage-slider"></div>
        <div className="item">
          <h2>{props.project}</h2>
          <h3>Description</h3>
          <div className="discription">
            This HTML hr CSS design uses the hr line as a separator between the
            content header and the main content area. The creator has used a
            small thin line for the HTML hr in this design, it looks great on
            the image background used on this page.
          </div>
          <h3>Tech</h3>
          <div className="badges">
            
          </div>
          <br />
          <div className="btn-container">
            <button role="button">Button 28</button>
            <button role="button">Button 28</button>
          </div>
        </div>
        {/* <div className="pimage-slider"></div> */}
      </div>
    </div>
  );
}
