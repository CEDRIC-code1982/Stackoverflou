module.exports = (app) => {
    const Message = require('../models/message');

    app.post('/api/message/save', async (req, res) => {

        const data = {
            content: req.body.content,
            user_id: req.body.user_id,
            topic_id: req.body.topic_id,
            creationDate: new Date()
        }

        const message = await Message(data);
        const result = await message.save();

        res.json({ status: 200, result, result })
    })

    app.get('/api/message/all', async (req, res) => {

        const messages = await Message.find({});

        res.json({ status: 200, messages: messages })
    })


    app.get('/api/message/:id', async (req, res) => {
        const id = req.params.id;

        const message = await Message.find({ _id: id });

        res.json({ status: 200, message: message[0] })
    })

    app.put('/api/message/update/:id', async (req, res) => {
        const id = req.params.id;

        const data = {
            content: req.body.content,
        }

        const result = await Message.updateOne({ _id: id }, data);

        res.json({ status: 200, result: result })
    })

    app.delete('/api/message/delete/:id', async (req, res) => {
        const id = req.params.id;

        const result = await Message.deleteOne({ _id: id });

        res.json({ status: 200, result: result })
    })


}