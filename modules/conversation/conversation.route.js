const ConversationRouter = require("express").Router();
const ConversationCtrl = require("./conversation.controller")

ConversationRouter.route("/").post(ConversationCtrl.setConversation).get(ConversationCtrl.getConversations)

module.exports = ConversationRouter