import * as React from "react";
import "./../assets/scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useNavigate } from "react-router-dom";
import AppNavBar from "./NavBar";
import stroop from "./../assets/img/stroop.png";
import sudotype from "./../assets/img/sudotype.png";
import uso from "./../assets/img/uso.png";

function Home() {
  const navigate = useNavigate();
  const goSudo = () => {
    navigate("/menu-sudo");
  };

  const goUso = () => {
    navigate("/menu-uso");
  };

  const goStroop = () => {
    navigate("/menu-stroop");
  };

  const pickRandomGame = () => {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        goUso();
        break;
      case 1:
        goSudo();
        break;
      case 2:
        goStroop();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <AppNavBar />
      <Container className="flex">
        <Row>
          <Col xs={6} className="one">
            <h1 className="header">Knockin' on your noggin</h1>
            <h4>
              Cognitive games created to stimulate brain activity and track
              neuro-performance
            </h4>
            <h4 className="randomGame" onClick={pickRandomGame}>
              start random game
            </h4>
          </Col>
          <Col xs={2} className="two">
            {/* <div className="usoLogo" onClick={goUso}>
              !uso
            </div> */}
            <img
              src={uso}
              className="img-responsive"
              width="100%"
              onClick={goUso}
            />
            <h6>train your hand-eye coordination</h6>
          </Col>
          <Col xs={2} className="three">
            {/* <div className="sudotypeLogo" onClick={goSudo}>
              a = j
            </div> */}
            <img
              src={sudotype}
              className="img-responsive"
              width="100%"
              onClick={goSudo}
            />
            <h6>train your cognitive skills</h6>
          </Col>
          <Col xs={2} className="four">
            {/* <div className="stroopLogo" onClick={goStroop}>
              red
            </div> */}
            <img
              src={stroop}
              className="img-responsive"
              width="100%"
              onClick={goStroop}
            />
            <h6>train your reaction to incongruent stimuli</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
