import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Welcome in Da Movies</div>
            <div className="title">The Web about trend movies and etc.</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">See List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
