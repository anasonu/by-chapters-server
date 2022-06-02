const { Schema, model } = require("mongoose");

const chapterSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
    }],
})

const ChapterModel = model("chapter", chapterSchema);
module.exports = ChapterModel;