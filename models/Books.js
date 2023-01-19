const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('books', BooksSchema)