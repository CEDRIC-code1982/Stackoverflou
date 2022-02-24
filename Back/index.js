require('dotenv').config();

// Création de mon serveur express
const express = require('express');

// Récupération du routeur
const router = require('./routes/router');

//importation de mongoose
const mongoose = require('mongoose');

//Connexion mongoose au serveur MongoDB
mongoose.connect(`${process.env.MONGO}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie ! ✅'))
  .catch(() => console.log('Connexion à MongoDB échouée ! ❌'));

// appel de la fonction express() pour fabriquer une app
const app = express();

// définition du port dans une variable
const port = process.env.PORT;

// route vers le routeur
app.use(router);

// route /
app.get('/', (req, res) => {
    res.send('Express running ⚜')
});

app.listen(port, () => {
    console.log(`listening on port ${port} serveur Express ✅ 🚀 ✨ `)
});