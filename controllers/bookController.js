const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.addBook = async (req, res) => {
  const { title, author, year } = req.body;
  const book = new Book({ title, author, year });
  await book.save();
  res.status(201).json(book);
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const updated = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.json({ message: 'Book deleted' });
};
