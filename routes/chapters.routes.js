const router = require("express").Router();
const isLoggedIn = require("../middlewares/isLoggedIn.js");
const isCreator = require("../middlewares/isCreator.js");
const ChapterModel = require("../models/Chapter.Model.js");

// GET "api/chapters/:bookId" => Mostrar listado de todos los capítulos de un libro
router.get("/:bookId", async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const response = await ChapterModel.find({ book: bookId }).populate("book author");
    res.json(response);
  } catch (error) {
    next(error);
  }
});

// POST "/api/chapters/:bookId/new-chapter" => Crear un nuevo capítulo
router.post("/:bookId/new-chapter", isLoggedIn, async (req, res, next) => {
  const { bookId } = req.params;
  const { title, content } = req.body;
  const { _id } = req.payload;

  if (!title || !content) {
    res.status(400).json({
      errorMessage: "Los campos de título y el contenido deben estar rellenos",
    });
    return;
  }

  try {
    const newChapter = await ChapterModel.create({
      title,
      content,
      book: bookId,
      author: _id,
    });
    res.json(newChapter);
  } catch (error) {
    next(error);
  }
});

// GET "/chapters/details/:chapterId" => Ver detalle de un capítulo
router.get("/details/:chapterId", isLoggedIn, async (req, res, next) => {
  const { chapterId } = req.params;

  try {
    const response = await ChapterModel.findById(chapterId).populate("book author");
    res.json(response);
  } catch (error) {
    next(error);
  }
});

// PATCH "/api/chapters/details/:chapterId" => Editar un capítulo
router.patch(
  "/details/:chapterId",
  isLoggedIn,
  isCreator,
  async (req, res, next) => {
    const { chapterId } = req.params;
    const { title, content, book, author } = req.body;

    try {
      if (!title || !content) {
        res.status(400).json({
          errorMessage: "Debes rellenar todos los campos",
        });
        return;
      }

      await ChapterModel.findByIdAndUpdate(chapterId, {
        title,
        content,
        book,
        author,
      });
      res.json("El capítulo se ha actualizado correctamente");
    } catch (error) {
      next(error);
    }
  }
);

// DELETE "/api/chapters/details/:chapterId" => Eliminar un capítulo
router.delete(
  "/details/:chapterId",
  isLoggedIn,
  isCreator,
  async (req, res, next) => {
    const { chapterId } = req.params;

    try {
      await ChapterModel.findByIdAndDelete(chapterId);
      res.json("El capítulo se ha eliminado correctamente");
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
