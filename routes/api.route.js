const router = require('express').Router()
const ConversationRouter = require('../modules/conversation/conversation.route');
const UserRouter = require("../modules/user/user.route")

router.use("/user", UserRouter)
router.use("/conversation", ConversationRouter)
module.exports = router;