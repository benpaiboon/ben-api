// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Controller
// const bookController = require('../controllers/bookController');

// Routes

// GET all 
// router.get('/book', bookController.getAll);
router.get('/book', (req, res) => {
  res.json({ msg: 'book data' });
});

module.exports = router;