import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '18rem', margin: '1rem', cursor: 'pointer' }}>
        <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description.substring(0, 100)}...</Card.Text>
          <Card.Text>⭐ {movie.rating}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
