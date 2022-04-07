const express = require('express');

const router = express.Router();

const BooksController = require('../controllers/booksController');

router.get('/:id', BooksController.getById);

router.put('/:id', BooksController.updateById);

router.delete('/:id', BooksController.exclude);

router.get('/', BooksController.getAll);

router.post('/', BooksController.createNewBook);

module.exports = router;



