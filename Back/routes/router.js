// création du router 
const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const topicsController = require('../controllers/topics');
const messageController = require('../controllers/message');

//! les routes pour User 
router.post('/api/user', userController.createUser); 
router.get('/api/user/:id', userController.getOneUser);

//! les routes pour Topics
router.get('/api/topics/:id', topicsController.getOneTopics);
router.post('/api/topics', topicsController.createTopics);
router.put('/api/topics/:id', topicsController.updateTopics);
router.delete('/api/topics/:id', topicsController.deleteTopics);

//! routes pour message
router.get('/api/message/:id', messageController.getOneMessage);
router.post('/api/message', messageController.createMessage);
router.put('/api/message/:id', messageController.updateMessage);
router.delete('/api/message/:id', messageController.deleteMessage);

module.exports = router;