const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    img: {
        type: String,
        default: "https://res.cloudinary.com/dcijwhvns/image/upload/v1654420227/by-chapters/default-cover_ogdgyj.jpg"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "author",
    },
})

const BookModel = model("book", bookSchema);
module.exports = BookModel;