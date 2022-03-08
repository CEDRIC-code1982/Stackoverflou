//! Voir pour mise en place du controllers une fois le front ok

const bcrypt = require('bcrypt');
const saltRound = 10;
const jwt = require('jsonwebtoken');
const secret = "secret";

const User = require('../models/user');

exports.signUp = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, saltRound)

  const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickName: req.body.nickName,
      email: req.body.email,
      password: hash,
      creationDate: new Date()
  }

  const user = await new User(data);
  const result = await user.save();
  console.log(result);
  res.json({ status: 200, result, result })
};

exports.getOneUser = async (req, res) => {
  const id = req.params.id;

  const user = await User.find({ _id: id });

  res.json({ status: 200, user: user[0] })
};

exports.signIn = async (req, res) => {

  const user = await User.find({ email: req.body.email });

  if (user.length <= 0) {
      res.json({ status: 404, msg: "user email not found" })
  } else {
      const compare = await bcrypt.compare(req.body.password, user[0].password);
      if (compare) {
          const payload = { email: user[0].email, id: user[0]._id }
          const token = jwt.sign(payload, secret);

          res.json({ status: 200, data: { token, user: user[0] } })
      } else {
          res.json({ status: 401, msg: "not allowed bad password" })
      }
  }
}