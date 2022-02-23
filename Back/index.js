require('dotenv').config();

// Création de mon serveur express
const express = require('express');

//importation de mongoose
const mongoose = require('mongoose');

// appel de la fonction express() pour fabriquer une app
const app = express();

//Connexion mongoose au serveur MongoDB
mongoose.connect('mongodb+srv://Cedric:JUeyIi1bRewZM3BY@cluster0.y1zg1.mongodb.net/Stackoverflou?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie ! ✅'))
  .catch(() => console.log('Connexion à MongoDB échouée ! ❌'));

// définition du port dans une variable
const port = process.env.PORT;

// route /
app.get('/', (req, res) => {
    res.send('Express running ⚜')
});

app.listen(port, () => {
    console.log(`listening on port ${port} serveur Express ✅ 🚀 ✨ `)
});