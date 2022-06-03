const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: [{
        type: Schema.Types.ObjectId,
        ref: "author",
    }],
})

const BookModel = model("book", bookSchema);
module.exports = BookModel;