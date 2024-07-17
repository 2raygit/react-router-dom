// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', posterUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2014/06/100-Favorite-Films-84-Inception-Still-Everett-MCDINCE_EC013-EMBED-2022.jpg', rating: 9, trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0' },
    // Ajoutez d'autres films ici
  ]);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const filterMovies = ({ title, rating }) => {
    setMovies(movies.filter(movie => 
      (title ? movie.title.includes(title) : true) && 
      (rating ? movie.rating >= rating : true)
    ));
  };

  return (
    <Router>
      <div className="app">
        <nav className="p-4 bg-gray-800 text-white">
          <Link to="/" className="mr-4">Accueil</Link>
          <Link to="/add" className="mr-4">Ajouter film</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Filter onFilter={filterMovies} />
              <MovieList movies={movies} />
            </>
          } />
          <Route path="/add" element={<AddMovieForm onAdd={addMovie} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
