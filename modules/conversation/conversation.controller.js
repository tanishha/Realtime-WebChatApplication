const convomodel = require("./conversation.model")

async function setConversation(req, res, next) {
//     try {
//         let senderId=req.body.senderId;
//         let receiverId=req.body.receiverId
//         const newConversation = new convomodel({
//         members: [senderId, receiverId]
//     })
//         await newConversation.save()
//             .then(function (data) {
//                 res.json(data);
//             })
//             .catch(function (err) {
//                 next(err);
//                 console.log("error", err);
//             });

//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

async function getConversations(req, res) {
    try {

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    setConversation,
    getConversations
}