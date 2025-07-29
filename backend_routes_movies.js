const express = require('express');
const axios = require('axios');
const router = express.Router();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/search', async (req, res) => {
  const { query, genre, year } = req.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query || ''}`;
  try {
    const response = await axios.get(url);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: 'TMDB search failed' });
  }
});

module.exports = router;