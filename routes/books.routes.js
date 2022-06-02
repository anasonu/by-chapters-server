const router = require("express").Router();
const BookModel = require("../models/Book.Model.js")

// GET "/api/books" => Mostrar todos los libros
router.get("/", async (req, res, next) => {
    try {
        
        const response = await BookModel.find();
        res.json(response);

    } catch (error) {
        next(error);
    };
});

// POST "/api/books/new-book" => Crear nuevo libro
// router.post("/new-book", async (req, res, next) => {
//     const { img, title, description, author } = req.body;

//     try {
//         const response = await BookModel.create
//     } catch (error) {
//         next(error);
//     };
// });

module.exports = router;