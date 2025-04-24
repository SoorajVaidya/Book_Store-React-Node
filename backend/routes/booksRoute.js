import express from 'express';
import { Book } from '../models/bookModels.js';

const router = express.Router();

// Create new book
router.post('/', async (req, res) => {
  try {
    const { title, auther, publishYear } = req.body;

    if (!title || !auther || !publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, auther, publishYear',
      });
    }

    const newBook = await Book.create({ title, auther, publishYear });
    return res.status(201).send(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({});
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const { title, auther, publishYear } = req.body;
    const { id } = req.params;

    if (!title || !auther || !publishYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, auther, publishYear',
      });
    }

    const [updated] = await Book.update(
      { title, auther, publishYear },
      { where: { id } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book updated successfully!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
