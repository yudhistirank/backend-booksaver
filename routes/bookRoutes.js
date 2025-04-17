const express = require('express');
const router = express.Router();
const {
  getBooks, addBook, updateBook, deleteBook,
} = require('../controllers/bookController');
const apiKeyMiddleware = require('../middlewares/apiKeyMiddleware');

router.use(apiKeyMiddleware);

router.get('/', getBooks);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
