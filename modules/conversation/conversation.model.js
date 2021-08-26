const Mongoose = require("mongoose");

const ConversationSchema = new Mongoose.Schema({
    members: { //sender and receiver
        type: Array
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = Mongoose.model("ConversationModel", ConversationSchema);