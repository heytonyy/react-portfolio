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
            Designed by heytonyy
          </h3>
          &nbsp;
          <h3 className="footer-copyright">
            © {year}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;