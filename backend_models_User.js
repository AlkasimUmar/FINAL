const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  favorites: [String], // array of TMDB movie IDs
  watchlist: [String]
});
module.exports = mongoose.model('User', userSchema);