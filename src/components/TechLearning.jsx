import React from "react";
import { Table } from "@nextui-org/react";

const TechLearning = () => {
  return (
    <div className="other-container" >
      <h1>Tech I'm Learning in 2023</h1>
      <table
        css={{
          height: "auto",
          minWidth: "auto",
        }}
      >
        <tr>
          <th>SR NO</th>
          <th>THINGS</th>
        </tr>
          <tr key="1">
            <td>1</td>
            <td>Github Actions</td>
          </tr>
          <tr key="2">
            <td>2</td>
            <td>Docker</td>
          </tr>
          <tr key="3">
            <td>3</td>
            <td>YAML</td>
          </tr>
          <tr key="4">
            <td>4</td>
            <td>Machine Learningl</td>
          </tr>
          <tr key="6">
            <td>4</td>
            <td>AI Course</td>
          </tr>
      </table>
    </div>
  );
};

export default TechLearning;
