import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/weather/:city" element={<WeatherCard />} />
      </Routes>
    </Router>
  );
}

export default App;