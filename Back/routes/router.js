//! en attente de modification
// création du router 
const express = require('express');

const userController = require('../controllers/user');
const topicsController = require('../controllers/topics');
const messageController = require('../controllers/message');

const router = express.Router();

const auth = require('../middleware/auth');

//! les routes pour User 
router.post('/api/user/signup', userController.signup);
router.post('/api/user/login', userController.login);

//! les routes pour Topics
router.get('/api/topics/:id', auth, topicsController.getOneTopics);
router.post('/api/topics', auth, topicsController.createTopics);
router.put('/api/topics/:id', auth, topicsController.updateTopics);
router.delete('/api/topics/:id', auth, topicsController.deleteTopics);

//! routes pour message
router.get('/api/message/:id', auth, messageController.getOneMessage);
router.post('/api/message', auth, messageController.createMessage);
router.put('/api/message/:id', auth, messageController.updateMessage);
router.delete('/api/message/:id', auth, messageController.deleteMessage);

module.exports = router;