import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import moviesData from './movies';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

 const addMovie = (movie) => {
  setMovies((prev) => {
    const updated = [...prev, movie];
    console.log('Movies after add:', updated);
    return updated;
  });
};

  return (
    <Container>
      <h1 className="text-center my-4">🎬 Ma Liste de Films</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
