// src/components/MovieDetail.jsx

import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  // Extract the video ID from the YouTube URL
  const videoId = new URL(movie.trailerUrl).searchParams.get('v');

  return (
    <div className="movie-detail p-4">
      <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-4">{movie.description}</p>
      <img src={movie.posterUrl} alt={`${movie.title} Poster`} className="w-full h-64 object-cover rounded-md mb-4" />
      {videoId ? (
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title={`${movie.title} Trailer`} 
          className="w-full h-44 mb-2"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-red-500"> lien trailer invalid</p>
      )}
      <Link to="/" className="text-blue-500 underline">retour a l'Accueil</Link>
    </div>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      trailerUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
