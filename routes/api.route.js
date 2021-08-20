const router = require('express').Router()
const UserRouter =require("../modules/user/user.route")

router.use("/user",UserRouter)
module.exports = router;