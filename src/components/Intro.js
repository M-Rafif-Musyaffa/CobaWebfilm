import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="Intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">SELAMAT MENONTON</div>
            <div className="title">BIOSKOP GRATIS</div>
            <div className="IntroButton mt-4 text-center">
              <button className="bg-dark rounded-2 text-white">Lihat Semua List</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
