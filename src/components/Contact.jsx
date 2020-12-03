import React, { Component } from "react";
import { Button, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contactStyle.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-end marginStyle my-2">
          <Button
            className="buttonCStyle m-1"
            onClick={() =>
              window.open("https://github.com/DavePopeye", "_blank")
            }
          >
            <FaGithub size={40} />
          </Button>
          <Button
            className="buttonCStyle m-1"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/davide-papa-8525b494/",
                "_blank"
              )
            }
          >
            <FaLinkedin size={40} />
          </Button>
        </Row>
      </div>
    );
  }
}
