const jwt = require('jsonwebtoken');
const secret = "secret";

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (token === undefined) {
        res.json({ status: 404, data: { msg: "Token not found" } });
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.json({ status: 401, data: { mesg: "Invalid Token !!!" } })
            } else {
                req.body._id = decoded.id;
                next();
            }
        })
    }
};