const usermodel = require("./user.model")

async function addUser(req, res, next) {
    try {
        let user = await usermodel.findOne({
            googleId: req.body.googleId
        })
        if (user) {
            return res.status(200).json("User already exists")
        }
        const newUser = new usermodel(req.body)
        await newUser.save()
            .then(function (data) {
                res.json(data);
                console.log("Successfully Registered");
            })
            .catch(function (err) {
                next(err);
                console.log("error", err);
            });

    } catch (err) {
        res.status(500).json(err)
    }
}

async function getUsers(req, res, next) {
    try {
        const user = await usermodel.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addUser,
    getUsers
}