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

// POST One
router.post('/hello', helloController.createOne);

// PUT One
router.put('/hello/:hello_id', helloController.editOne);

// DELETE One
router.delete('/hello/:hello_id', helloController.removeOne);

module.exports = router;