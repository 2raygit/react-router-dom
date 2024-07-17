// src/components/AddMovieForm.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterUrl, rating: parseFloat(rating), trailerUrl };
    onAdd(newMovie);
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
    setTrailerUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau film</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      ></textarea>
      <input
        type="url"
        placeholder="lien du poster"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <input
        type="url"
        placeholder="lien de la bande annonce"
        value={trailerUrl}
        onChange={(e) => setTrailerUrl(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Ajouter le film</button>
    </form>
  );
};

export default AddMovieForm;
AddMovieForm.propTypes = {
  onAdd: PropTypes.func.isRequired, // Spécifiez que onAdd doit être une fonction et est requis
};
