import React, { useState } from 'react';
import API from '../services/api';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchMovies = async () => {
    const res = await API.get(`/movies/search?query=${query}`);
    setResults(res.data);
  };
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies..." />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {results.map(m => (<li key={m.id}>{m.title}</li>))}
      </ul>
    </div>
  );
}
export default MovieSearch;