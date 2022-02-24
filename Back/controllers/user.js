const User = require('../models/user');

exports.createUser = (req, res, next) => {
  //delete req.body._id;
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'User enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

exports.getOneUser = (req, res, next) =>{
  User.findOne({_id: req.params.id})
  .then(user => res.status(200).json(user))
  .catch(error => res.status(404).json({error}))
});