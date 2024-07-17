// src/components/MovieCard.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card border rounded-lg shadow-lg p-4">
      <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="w-full h-64 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{movie.title}</h3>
      <p className="text-gray-600">{movie.description}</p>
      <span className="text-yellow-500">Note: {movie.rating}</span>
      <Link to={`/movie/${movie.id}`} className="text-blue-500 underline mt-2 block">Voir details</Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
