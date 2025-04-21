const express = require('express');
const router = express.Router();
const {
  getBooks, addBook, updateBook, deleteBook,
} = require('../controllers/bookController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

// Middleware untuk memeriksa API key
router.use(apiKeyMiddleware);

// Routes untuk buku
router.get('/', getBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
