// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Controller
const helloController = require('../CONTROLLER/hello.controller');

// Routes

// GET All
router.get('/hello', helloController.getAll);

// GET One
router.get('/hello/:hello_id', helloController.getOne);

module.exports = router;