const router = require("express").Router();

const authRoutes = require("./auth.routes.js");
router.use("/auth", authRoutes);

const booksRoutes = require("./books.routes.js");
router.use("/books", booksRoutes);

const chapterRoutes = require("./chapters.routes.js");
router.use("/chapters", chapterRoutes);

const uploaderRoutes = require("./uploader.routes");
router.use("/uploader", uploaderRoutes);

const authorRoutes = require("./author.routes.js");
router.use("/authors", authorRoutes);

module.exports = router;
