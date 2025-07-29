import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    API.get('/user/favorites').then(res => setFavorites(res.data));
  }, []);
  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map(id => <li key={id}>{id}</li>)}
      </ul>
    </div>
  );
}
export default Favorites;