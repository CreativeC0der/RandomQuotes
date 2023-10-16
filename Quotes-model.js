const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    'quote': String,
    'length': Number,
    'tags': [String],
    'author': String,
    'likes': Number
});

const quotes = new mongoose.model('quotes', quoteSchema);
module.exports = quotes
