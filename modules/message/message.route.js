const MessageRouter = require("express").Router();
const MessageCtrl = require("./message.controller")

MessageRouter.route("/").post(MessageCtrl.newMessages)
MessageRouter.route("/:id").get(MessageCtrl.getMessages)
module.exports = MessageRouter