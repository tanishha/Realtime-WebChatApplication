const ConversationRouter = require("express").Router();
const ConversationCtrl = require("./conversation.controller")

ConversationRouter.route("/").post(ConversationCtrl.setConversation)
ConversationRouter.route("/fetch").post(ConversationCtrl.getConversations)

module.exports = ConversationRouter