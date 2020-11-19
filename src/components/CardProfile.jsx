import React, { Component } from "react";
import { Card, Container, Image, Col } from "react-bootstrap";
import pic from "../images/personalPic.jpg";
import "../styles/picStyle.css";

export default class CardProfile extends Component {
  render() {
    return (
      <>
        <Container className="d-flex">
          <Col>
            <Image style={{ width: "60%" }} src={pic} className="imgStyle" />
          </Col>
          <Col>
            <Card className="cardStyle shadow">
              <Card.Body>
                Hello world, my name is Davide, I'm a junior fullstack
                developer, only 8 months before i never touched any program
                things what so ever, i dedicated all my life in music and
                production, but now i fund a new begging in my life as web
                development, Strive School was just the starting line of this
                life journey, i'm so excited about
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}
