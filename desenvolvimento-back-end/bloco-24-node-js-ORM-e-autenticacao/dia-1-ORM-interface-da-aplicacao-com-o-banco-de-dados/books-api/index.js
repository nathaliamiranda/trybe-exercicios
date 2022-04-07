const express = require('express');
const bodyParser = require('body-parser');

const books = require('./routes/booksRoute');
const author = require('./routes/authorRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/books', books);

app.use('/author', author);

app.listen(PORT, () => console.log(`Ouvindo na porta ${ PORT }!`));