require('dotenv').config();

// Création de mon serveur express
const express = require('express');

//importation de mongoose
const mongoose = require('mongoose');

const User = require('./app/models/User')

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

// route /
app.get('/', (req, res) => {
    res.send('Express running ⚜')
});

//! les routes pour User 
app.post('/api/user', (req, res, next) => {
  //delete req.body._id;
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'User enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/user/:id', (req, res, next) =>{
  User.findOne({_id: req.params.id})
  .then(user => res.status(200).json(user))
  .catch(error => res.status(404).json({error}))
});



app.listen(port, () => {
    console.log(`listening on port ${port} serveur Express ✅ 🚀 ✨ `)
});