import "./App.css";
import { Col, Row, Container } from "react-bootstrap";
import CardProfile from "./components/CardProfile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import VideoThumb from "./components/VideoThumb";

function App() {
  return (
    <>
      <Container>
        <Col className="col-12">
          <CardProfile />
        </Col>
        <Col className="infoStyle">
          <p>DAVIDE PAPA</p>
          <p>JUNIOR FULLSTACK</p>
        </Col>
      </Container>
      <Container>
        <Contact />
      </Container>
      <Container className="my-5">
        <h1 className="titleStyle my-5">Hire.Me video demo:</h1>
        <Row className="justify-content-center">
          <VideoThumb />
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="titleStyle my-5">Personal Projects:</h1>

        <Projects />
      </Container>
    </>
  );
}

export default App;
