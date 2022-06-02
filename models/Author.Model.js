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
    
})

const AuthorModel = model("author", authorSchema);
module.exports = AuthorModel;