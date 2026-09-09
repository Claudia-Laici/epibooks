import { Container, Row, Col } from "react-bootstrap";
import "./MyFooter.css";

const MyFooter = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="FooterBrand">
            <h3>EpicBooks</h3>

            <p>
              Il tuo portale per esplorare incredibili mondi di fantascienza e
              avventure futuristiche.
            </p>
          </Col>

          <Col xs={6} md={2} lg={2} className="FooterSection">
            <h4>Explore</h4>
            <a href="#">All Books</a>
            <a href="#">Favorites</a>
            <a href="#">New Releases</a>
          </Col>

          <Col xs={6} md={2} lg={2} className="FooterSection">
            <h4>Info</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </Col>

          <Col xs={12} md={2} lg={2} className="FooterSection">
            <h4>Follow us</h4>

            <div className="FooterSocial">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </Col>
        </Row>

        <div className="FooterBottom">
          <p className="m-0">&copy; 2026 SciFi Books. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default MyFooter;
