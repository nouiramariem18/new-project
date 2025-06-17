import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDescription from './components/MovieDescription'; // ⚠️ n'oublie pas de le créer
import moviesData from './movies';

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
    <Router>
      <Routes>
        {/* Home page: filtre, ajout et liste */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* Page de description */}
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

