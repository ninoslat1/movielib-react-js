import {useEffect, useState} from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios"

const Other = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_KEY_URL,
        page: 2,
      }
    }).then((response) => {
      setMovie(response.data.results)
    })
  }, [])

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Other Movies</h1>
        <br />
        <Row>
          {movie.map((result, index) => {
            return (
          <Col md={4} className="movieWrapper" id="other" key={index}>
            <Card className="movieImage">
              <Image src={`${process.env.REACT_APP_IMG_PATH}/${result.poster_path}`} alt={`${result.title} Name`} className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.title}</Card.Title>
                  <Card.Text className="text-left">
                    <b>Overview</b>
                    <br></br>
                    {result.overview}
                  </Card.Text>
                  <Card.Text className="text-left">
                    <b>Release : </b>{result.release_date}
                  </Card.Text>
                  <Card.Text className="text-left">
                    <b>Score : </b>{result.vote_average}
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Other
