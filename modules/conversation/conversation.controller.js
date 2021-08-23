const convomodel = require("./conversation.model")

async function setConversation(req, res, next) {
    try {
        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId
        let convo = await convomodel.findOne({
            members: {
                $all: [receiverId, senderId]
            }
        })
        if (convo) {
            return res.status(200).json("Conversation already exists")
        }
        const newConversation = new convomodel({
            members: [senderId, receiverId]
        })
        await newConversation.save()
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                next(err);
                console.log("error", err);
            });

    } catch (err) {
        res.status(500).json(err)
    }
}

async function getConversations(req, res) {
    try {
        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId
        let convo = await convomodel.findOne({
            members: {
                $all: [receiverId, senderId]
            }
        })
        res.status(200).json(convo);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    setConversation,
    getConversations
}