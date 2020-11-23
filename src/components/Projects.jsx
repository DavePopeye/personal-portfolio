import React, { Component } from "react";
import { Card, Row, Image, Col, Button } from "react-bootstrap";
import hireW from "../images/hireW.png";
import spoty from "../images/spoty.jpg";
import "../styles/projectStyle.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card className="shadow my-2">
          <Card.Body>
            <Card.Title>Hire.Me:</Card.Title>
            <Row className="d-inline-flex">
              <Col className="col-4 p-0 mx-0">
                <Image
                  src={hireW}
                  fluid
                  width="50%"
                  className="ml-3 mt-2"
                ></Image>
              </Col>
              <Row className="col-8">
                <Card.Text>
                  A simple portal for find your ideal web developer, the idea
                  behind this site is the fast and easy way to use it, you can
                  contact a person with the skills you looking for in under a
                  minute!
                </Card.Text>
              </Row>
            </Row>
            <Row className="justify-content-end">
              <Button
                className="buttonStyle m-1"
                onClick={() =>
                  window.open("https://hire-dot-me.herokuapp.com/", "_blank")
                }
              >
                Demo
              </Button>
              <Button
                className="buttonStyle m-1"
                onClick={() =>
                  window.open(
                    "https://github.com/DavePopeye/Hire.Me-Frontend",
                    "_blank"
                  )
                }
              >
                Github frontend
              </Button>
              <Button
                className="buttonStyle m-1 mr-2"
                onClick={() =>
                  window.open(
                    "https://github.com/DavePopeye/Hire.Me-Backend",
                    "_blank"
                  )
                }
              >
                Github backend
              </Button>
            </Row>
          </Card.Body>
        </Card>

        <Card className="shadow">
          <Card.Body>
            <Card.Title>Spotify:</Card.Title>
            <Row className="d-inline-flex">
              <Col className="col-4 p-0 mx-0">
                <Image
                  src={spoty}
                  fluid
                  width="50%"
                  className="ml-5 mt-2"
                ></Image>
              </Col>
              <Row className="col-6 textStyle">
                <Card.Text>
                  A strive simulation of Spotify with a backend api
                </Card.Text>
              </Row>
            </Row>
            <Row className="justify-content-end">
              <Button
                className="buttonStyle m-1"
                onClick={() =>
                  window.open(
                    "https://github.com/DavePopeye/SpotifyWithRedux",
                    "_blank"
                  )
                }
              >
                Github code
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
