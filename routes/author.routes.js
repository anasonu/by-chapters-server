const AuthorModel = require("../models/Author.Model");

const router = require("express").Router();

// GET "/api/authors" => Mostrar todos los autores
router.get("/", async (req, res, next) => {
    try {
        const response = await AuthorModel.find()
        res.json(response);
    } catch (error) {
        next(error);
    }
});

// GET "/api/authors/:id" => Ver detalles de un autor
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const response = await AuthorModel.findById(id);
        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;