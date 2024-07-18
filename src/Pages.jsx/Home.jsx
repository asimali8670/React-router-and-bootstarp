import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Import your custom CSS file
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

const display = ()=>{
  navigate("/portfolio")
}




  return (
    <div className="bg-image">
      <div className="bg-overlay">
        <Container className="content-container">
          <Row className="align-items-center w-100">
            <Col lg={6} className="text-lg-left text-center">
              <h1
                fluid
                className="display-4 bg-warning text-black-50 rounded mt-n3 custom-margin-top"
              >
                Welcome to My Portfolio
              </h1>

              <Col lg={6} className="d-none d-lg-block">
                <Col className="text-white">
                  <h2>HI, I'm Asim!</h2>
                </Col>
                <img
                  src="./assets/port-logo6.avif"
                  alt="Hero"
                  className="img-fluid rounded custom-margin"
                />
              </Col>
              <br />
              <p className="text-white">
                I am a passionate developer with a knack for creating amazing
                web applications. Explore my work and get in touch!
              </p>
              
                <Button variant="primary" onClick={display}>View Portfolio</Button>
          
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
