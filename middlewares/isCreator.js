const BookModel = require("../models/Book.Model");

const isCreator = async (req, res, next) => {
    const { bookId } = req.params;

    try {
        const book = await BookModel.findById(bookId);
        // const book = await BookModel.findById({$or: [ {_id: bookId}, {_id: chapterId} ]})
        if(book.author == req.payload._id) {
            next();
        } else {
            res.status(405).json({
                errorMessage: "No estás autorizado a realizar estos cambios",
            });
        }
    } catch (error) {
        next(error)
    }
};

module.exports = isCreator;