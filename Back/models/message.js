const Mongoose = require('mongoose');

// La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
const messageSchema = new Mongoose.Schema({
    content: { type: String, required: true },
    user_id: { type: String, required: true },
    topic_id: { type: String, required: true },
    creationDate: { type: Date, required: true }
}, { collection: "message" });

// La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = Mongoose.model('message', messageSchema);