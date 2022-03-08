// recupération des variables d'environnement
require('dotenv').config();

//importation de mongoose
const mongoose = require('mongoose');

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const DB = "Stackoverflou";
const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.y1zg1.mongodb.net/${DB}?retryWrites=true&w=majority`;
const MongoDBClient = {
    initialize: () => {
        console.log("Démarrage de mongoClient")
        try {
            //console.log("Je rentre dans mon try")
            const client = mongoose.connect(URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })

            client.then(() => { return console.log(`Connexion à MongoDB réussi à ${DB} ! ✅ `) })
                .catch((err) => { console.log(err, `Connexion à MongoDB échouée à ${DB} ! ❌`) })
        } catch (err) {
            throw Error(err)
        }
    }
}

module.exports = MongoDBClient;