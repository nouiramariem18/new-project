import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // S'assurer que id est bien un nombre
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div className="container mt-4">Film introuvable</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="my-3">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate('/')}>
        ⬅ Retour à l'accueil
      </button>
    </div>
  );
}

export default MovieDescription;
