const router = require("express").Router();

const authRoutes = require("./auth.routes.js");
router.use("/auth", authRoutes);

const booksRoutes = require("./books.routes.js");
router.use("/books", booksRoutes);

const chapterRoutes = require("./chapters.routes.js");
router.use("/chapters", chapterRoutes);

module.exports = router;
