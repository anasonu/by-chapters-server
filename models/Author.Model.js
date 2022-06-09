const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
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
    },
    admin: {
        type: Boolean,
        default: false,
    },
})

const AuthorModel = model("author", authorSchema);
module.exports = AuthorModel;