import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { imageUrl } from './Url';
import { Rating } from '@mui/material';

const Movies = ({ movielink, mtype }) => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    axios.get(movielink).then((result) => setmovie(result.data.results));
  }, [movielink]);

  return (
    <Container>
      <Row>
        {movie.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-2 mb-2">
            <Card
              style={{
                height: '100%',
                textAlign: 'center',
                backgroundColor: 'lightgrey',
                border: '1px solid',
                color: 'darkblue',
              }}
            >
              <Card.Img
                variant="top"
                src={imageUrl + item.backdrop_path}
                style={{ height: '190px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{mtype === 'comedy' ? item.name : item.title}</Card.Title>
                <Card.Text>{item.original_language}</Card.Text>
                <Card.Text>
                  Released On :{' '}
                  {mtype === 'comedy' ? item.first_air_date : item.release_date}
                </Card.Text>
                <Rating name="customized-10" defaultValue={item.vote_average} max={10} /> <br />
                <Link to="/details" state={{ movie: item, mtype }} className="btn btn-primary mt-2">
                  More Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
