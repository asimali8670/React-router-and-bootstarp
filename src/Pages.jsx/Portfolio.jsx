import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "./Data";
import "./style.css";

const Portfolio = () => {
  return (
    <>
      <div className="bg-image">
        <Container fluid className=" text-center text-white">
          <h1> My Portfolio!</h1>
        </Container>
        <Container fluid className="text-white">
          <Row>
            <h2>Experienced with:</h2>
          </Row>
          <Col>
            <h2>Html and css</h2>
          </Col>

          <Col>
            <h2>Javascript</h2>
          </Col>

          <Col>
            <h2>ReactJS</h2>
          </Col>

          <Col>
            <h2>NodeJS</h2>
          </Col>
        </Container>

        <Container fluid className="p-4 text-center text-white">
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="bg-warning">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <Button
                      variant="primary"
                      href={project.liveLink}
                      target="_blank"
                      className="mr-2"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="secondary"
                      href={project.repoLink}
                      target="_blank"
                    >
                      GitHub Repo
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
