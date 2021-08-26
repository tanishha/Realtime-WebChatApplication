const msgmodel = require("./message.model")
const convomodel = require("../conversation/conversation.model")

async function newMessages(req, res, next) {
    try {
        const newMessage = new msgmodel(req.body);
        await newMessage.save();
        await convomodel.findByIdAndUpdate(req.body.conversationId, {
            message: req.body.text
        });
        res.status(200).json("Message has been sent successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getMessages(req, res) {
    try {
        const messages = await msgmodel.find({
            conversationId: req.params.id
        });
        res.status(200).json(messages);
    } catch (error) {
        resp.status(500).json(error);
    }
}

module.exports = {
    newMessages,
    getMessages
}