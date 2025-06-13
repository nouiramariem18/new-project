import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

function MovieList({ movies }) {
  return (
    <Row className="justify-content-center">
      {movies.map((movie, idx) => (
        <Col key={idx} xs={12} md={6} lg={4}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
