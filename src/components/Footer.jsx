import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <h3 className="footer-copyright">
            Base template by Soumyajit Behera
          </h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
          <h3 className="footer-copyright">
            Copyright © {year} SB
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;