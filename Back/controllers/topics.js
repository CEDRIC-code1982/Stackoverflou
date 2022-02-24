const Topics = require('../models/Topics');

exports.getOneTopics = (req, res, next) =>{
  Topics.findOne({_id: req.params.id})
  .then(topics => res.status(200).json(topics))
  .catch(error => res.status(404).json({error}))
};

exports.createTopics = (req, res, next) => {
  const topics = new Topics({
    ...req.body
  });
  topics.save()
    .then(() => res.status(201).json({ message: 'Topics enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.updateTopics = (req, res, next) => {
  Topics.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Topics modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteTopics = (req, res, next) => {
  Topics.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Topics supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};