const Message = require('../models/message');

exports.getOneMessage = (req, res, next) =>{
  Message.findOne({_id: req.params.id})
  .then(message => res.status(200).json(message))
  .catch(error => res.status(404).json({error}))
});

exports.createMessage = (req, res, next) => {
  const message = new Message({
    ...req.body
  });
  message.save()
    .then(() => res.status(201).json({ message: 'Message enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

exports.updateMessage = (req, res, next) => {
  Message.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Message modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

exports.deleteMessage = (req, res, next) => {
  Message.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Message supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});