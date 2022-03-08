require('dotenv').config();

const express = require('express');
const app = express();

//pour parser sur les route POST en json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//pour la liaison front et back
const cors = require('cors');
app.use(cors());

//recupération de MongoDB
const MongoDBClient = require('./mongoClient');

const userRoutes = require('./routes/userRoutes');
const topicRoutes = require('./routes/topicRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authRoutes = require('./routes/authRoutes');

// définition du port dans une variable
const port = process.env.PORT;

app.get('/', (req, res, next) => {
    res.json({ status: 200, msg: "ok" })
});

userRoutes(app);
topicRoutes(app);
messageRoutes(app);
authRoutes(app);

app.listen(port, () => {
    console.log(`listening on port ${port} serveur Express ✅ 🚀 ✨ `)
    MongoDBClient.initialize();
})
