const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.post('/favorites', auth, async (req, res) => {
  const { movieId } = req.body;
  const user = await User.findById(req.user);
  if (!user.favorites.includes(movieId)) user.favorites.push(movieId);
  await user.save();
  res.json(user.favorites);
});

router.get('/favorites', auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json(user.favorites);
});
module.exports = router;