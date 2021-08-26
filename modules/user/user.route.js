const UserRouter = require("express").Router();
const UserCtrl = require("./user.controller")

UserRouter.route("/").post(UserCtrl.addUser).get(UserCtrl.getUsers)

module.exports = UserRouter