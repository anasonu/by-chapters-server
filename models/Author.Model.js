const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    pseudonym: {
        type: String,
    },
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const AuthorModel = model("author", authorSchema);
module.exports = AuthorModel;