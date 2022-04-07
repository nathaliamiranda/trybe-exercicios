const { Book } = require('../models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll({ order: [['title', 'ASC'], ['createad', 'ASC']] });

    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "algo deu errado" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Algo deu errado" });
  }
};

const createNewBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    return res.status(201).json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Algo deu errado" });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const updateBook = await Book.update(
      {
        title,
        author,
        pageQuantity,
      }, { where: { id } },
    );

    return res.status(200).json(updateBook);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Algo deu errado" });
  }
};

const exclude = async (req, res) => {
  try {
    const { id } = req.params;

    const bookDeleted = await Book.findByPk(id);
    await bookDeleted.destroy();

    return res.status(200).json({ message: "Book deleted" });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Algo deu errado" });
  }
};

module.exports = {
  getAll,
  getById,
  createNewBook,
  updateById,
  exclude,
};