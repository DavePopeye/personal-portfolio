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
                Hello world, my name is Davide!
                <br /> I am a former music producer, only 8 months ago I had no
                idea what programming meant. Now I found a new start in life in
                web programming as a junior full-stack developer. I'm really
                excited about this new part of my life and focus on learning
                more and more about web development every day.
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}
