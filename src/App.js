import "./App.css";
import { Col, Row, Container } from "react-bootstrap";
import CardProfile from "./components/CardProfile";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Container>
        <Col>
          <CardProfile />
        </Col>
        <Col className="infoStyle">
          <p> - DAVIDE PAPA</p>
          <p> - JUNIOR FULLSTACK</p>
        </Col>
      </Container>
      <Container className="my-5">
        <Row>
          <h1 className="titleStyle">Personal Projects:</h1>
        </Row>
        <Projects />
      </Container>
    </>
  );
}

export default App;
