import React from "react";
import "../App.scss";
import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";

export default function Projects() {
  var card = (
    <Card css={{ mw: "330px" }} isPressable>
      <Card.Header>
        <Card.Image
          style={{ borderRadius: "10px" }}
          src={
            "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg"
          }
          objectFit="cover"
          width="100%"
        />
      </Card.Header>
      {/* <Card.Divider /> */}
      <Card.Body css={{ py: "$10" }}>
        <Card.Header>
          <Text b>Card Title</Text>
        </Card.Header>
        <Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Text>
      </Card.Body>
      {/* <Card.Divider /> */}
      <Card.Footer>
        <Row justify="flex-start">
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Row>
      </Card.Footer>
    </Card>
  );

  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="project-list">
        <Grid.Container gap={5} justify="center">
          <Grid>{card}</Grid>
          <Grid>{card}</Grid>
          <Grid>{card}</Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
