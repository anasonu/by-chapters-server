const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes.js");
router.use("/auth", authRoutes);

const booksRoutes = require("./books.routes.js");
router.use("/books", booksRoutes);

const chapterRoutes = require("./chapters.routes.js");
router.use("/chapters", chapterRoutes);

module.exports = router;
