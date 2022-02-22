require('dotenv').config();

// Création de mon serveur express
const express = require('express');

// appel de la fonction express() pour fabriquer une app
const app = express();

// définition du port dans une variable
const port = process.env.PORT;

// route /
app.get('/', (req, res) => {
    res.send('Express running ⚜')
});

app.listen(port, () => {
    console.log(`listening on port ${port} ✅ `)
});