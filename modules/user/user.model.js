const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = Mongoose.model("UserModel", UserSchema);