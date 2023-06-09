import React from "react";
import { Card, Col, Text } from "@nextui-org/react";
import PaddingContainer from "./PaddingContainer";

const About = () => {
  return (
    <PaddingContainer>
      <h1>About</h1>
      <div className="about-container">
        <img src="https://nextui.org/images/card-example-4.jpeg" alt="about" />
          <span>
            Hi, I'm a full stack developer Hi, I'm a full stack developer Hi,
            I'm a full stack developer Hi, I'm a full stack developer Hi, I'm a
            full stack developer Hi, I'm a full stack developer Hi, I'm a full
            stack developer Hi, I'm a full stack developer{" "}
          </span>

      </div>
    </PaddingContainer>
  );
};

export default About;
