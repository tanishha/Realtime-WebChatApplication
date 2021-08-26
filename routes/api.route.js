const router = require('express').Router()
const ConversationRouter = require('../modules/conversation/conversation.route');
const MessageRouter = require('../modules/message/message.route');
const UserRouter = require("../modules/user/user.route")

router.use("/user", UserRouter)
router.use("/conversation", ConversationRouter)
router.use("/message", MessageRouter)
module.exports = router;