const router = require("express").Router();
const uploader = require("../middlewares/uploader.js");

router.post("/", uploader.single("img"), (req, res, next) => {
    res.json(req.file.path);
})

// router.patch("/edit", uploader.single("img"), (req, res, next) => {
//     res.json(req.file.path);
// })

module.exports = router;