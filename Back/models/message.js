const mongoose = require('mongoose');

// La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
const messageSchema = mongoose.Schema({
    content: { type: String, required: true },
    user_id: { type: String, required: true },
    topic_id: { type: Number, required: true },
    creationDate: { type: Number, required: true },
});

// La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('Message', messageSchema);