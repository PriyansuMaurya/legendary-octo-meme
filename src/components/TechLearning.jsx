import React from "react";
import { Table } from "@nextui-org/react";
import PaddingContainer from "./PaddingContainer";

const TechLearning = () => {
  return (
    <PaddingContainer>
      <h1>Tech I'm Learning in 2023</h1>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "auto",
        }}
      >
        <Table.Header>
          <Table.Column>SR NO</Table.Column>
          <Table.Column>THINGS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Github Actions</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Docker</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>3</Table.Cell>
            <Table.Cell>YAML</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Machine Learningl</Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell>4</Table.Cell>
            <Table.Cell>AI Course</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </PaddingContainer>
  );
};

export default TechLearning;
