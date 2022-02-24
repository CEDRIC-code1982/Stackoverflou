const mongoose = require('mongoose');

const topicsSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: Number, required: true },
    creationDate: { type: Number, required: true },
});

module.exports = mongoose.model('Topics', topicsSchema);