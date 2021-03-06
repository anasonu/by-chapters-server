const { Schema, model } = require("mongoose");

const chapterSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "book",
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "author",
    },
})

const ChapterModel = model("chapter", chapterSchema);
module.exports = ChapterModel;