const Mongoose = require('mongoose');

// package suite à l'ajout de unique: true pour le password
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creationDate: { type: Date, required: true }
}, { collection: "user" });

userSchema.plugin(uniqueValidator);

module.exports = Mongoose.model('user', userSchema);