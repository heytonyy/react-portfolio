import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../assets/home-stock.svg";
import downArrow from "../../assets/navigation_arrow_down.svg";
import Type from "./Type";

function ParallaxHome1() {
    return (
        <Container fluid className="home-section" id="home">

            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 style={{ paddingBottom: 15 }} className="heading">
                            Hi There!{" "}
                            <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                            </span>
                        </h1>

                        <h1 className="heading-name">
                            I'M
                            <strong className="main-name"> Tony Aiello </strong>
                        </h1>

                        <div style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50, textAlign: "left" }}>
                            <Type />
                        </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20, paddingTop: 50 }}>
                        <img
                            src={homeImg}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-down-arrow">
                        <img
                            src={downArrow}
                            alt="down arrow"
                            className="img-fluid"
                            style={{ paddingTop: 50 }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ParallaxHome1;