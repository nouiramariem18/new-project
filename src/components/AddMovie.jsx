import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddMovie({ onAdd }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔍 Vérifie les champs requis
    if (!newMovie.title || !newMovie.posterURL) {
      alert('Le titre et l\'affiche sont obligatoires');
      return;
    }

  
    const movieToAdd = {
      ...newMovie,
      rating: parseFloat(newMovie.rating),
    };

    onAdd(movieToAdd);


    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 1,
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-2">
        <Form.Control
          name="title"
          placeholder="Titre"
          value={newMovie.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          name="posterURL"
          placeholder="URL de l'affiche"
          value={newMovie.posterURL}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          name="rating"
          type="number"
          placeholder="Note"
          value={newMovie.rating}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ajouter le film
      </Button>
    </Form>
  );
}

export default AddMovie;
