import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function SearchForm() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather/${city}`); // Navigate to the weather page with the city parameter
  };

  return (
    <div className="search-container">
      <div className="title">Weather App</div>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          className="search-input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
        />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;