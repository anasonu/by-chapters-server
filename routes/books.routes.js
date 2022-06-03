const router = require("express").Router();
const BookModel = require("../models/Book.Model.js");
const AuthorModel = require("../models/Author.Model");
const isLoggedIn = require("../middlewares/isLoggedIn.js");
const isCreator = require("../middlewares/isCreator.js");

// GET "/api/books" => Mostrar todos los libros
router.get("/", async (req, res, next) => {
  try {
    const response = await BookModel.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

// POST "/api/books/new-book" => Crear nuevo libro
router.post("/new-book", isLoggedIn, async (req, res, next) => {
  const { img, title, description } = req.body;
  const { _id } = req.payload;

  if (!title || !description) {
    res.status(400).json({
      errorMessage: "Los campos de título y descripción deben estar rellenos",
    });
    return;
  }

  try {
    const newBook = await BookModel.create({
      img,
      title,
      description,
      author: _id,
    });

    res.json(newBook);
  } catch (error) {
    next(error);
  }
});

// GET "/api/books/:id" => Ver detalles de un libro
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await BookModel.findById(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

// PATCH "/api/books/:id" => Editar un libro
router.patch("/:id", isLoggedIn, isCreator, async (req, res, next) => {
  const { id } = req.params;
  const { img, title, description, author } = req.body;
  const { _id } = req.payload;

  try {
    if (!title || !description) {
      res.status(400).json({
        errorMessage: "El título y la descripción no pueden estar vacíos",
      });
      return;
    }

    await BookModel.findByIdAndUpdate(id, {
      img,
      title,
      description,
      author,
    });
    res.json("El libro se ha actualizado correctamente");
  } catch (error) {
    next(error);
  }
});

// DELETE "/api/books/:id" => Eliminar libro
router.delete("/:id", isLoggedIn, isCreator, async (req, res, next) => {
  const { id } = req.params;
  const { author } = req.body;
  const { _id } = req.payload;

  try {
    await BookModel.findByIdAndDelete(id);
    res.json("El libro se ha eliminado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = router;