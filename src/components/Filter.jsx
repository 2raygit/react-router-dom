// src/components/Filter.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter p-4 flex flex-col sm:flex-row items-center">
      <input
        type="text"
        placeholder="Filter par  titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded m-2"
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 rounded m-2"
      />
      <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded m-2">Filtrer</button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired, // Spécifiez que onFilter doit être une fonction
};

export default Filter;
