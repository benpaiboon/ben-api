// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Controller
const HelloController = require('../controllers/hello.controller');

// Routes

// GET All
router.get('/hello', HelloController.getHello);

// GET One
router.get('/hello/:hello_id', HelloController.getHelloById);

// POST One
router.post('/hello', HelloController.createHello);

// PUT One
router.put('/hello/:hello_id', HelloController.updateHello);

// DELETE One
router.delete('/hello/:hello_id', HelloController.deleteHello);

module.exports = router;