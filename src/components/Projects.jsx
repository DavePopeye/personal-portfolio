import React, { Component } from "react";
import { Card, Row, Image, Col, Button } from "react-bootstrap";
import hireW from "../images/hireW.png";
import "../styles/projectStyle.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card className="shadow">
          <Card.Body>
            <Card.Title>Hire.Me</Card.Title>
            <Row className="d-inline-flex">
              <Col className="col-4 p-0 mx-0">
                <Button
                  className="buttonStyle"
                  onClick={() =>
                    window.open("https://hire-dot-me.herokuapp.com/", "_blank")
                  }
                >
                  <Image src={hireW} fluid width="50%"></Image>
                </Button>
              </Col>
              <Col className="col-8">
                <Card.Text>
                  A simple portal for find your ideal web developer, the idea
                  behind this site is the fast and easy way to use it, you can
                  contact a person with the skills you looking for in under a
                  minute!
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
