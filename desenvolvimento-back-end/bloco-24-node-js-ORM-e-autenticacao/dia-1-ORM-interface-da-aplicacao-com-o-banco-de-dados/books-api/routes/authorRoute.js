const express = require('express');

const router = express.Router();

const AuthorController = require('../controllers/authorController');

router.get('/:name', AuthorController.getByAuthorName);

module.exports = router;