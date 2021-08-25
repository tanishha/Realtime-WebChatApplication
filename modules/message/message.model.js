const Mongoose = require("mongoose");

const MessageSchema = new Mongoose.Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = Mongoose.model("MessageModel", MessageSchema);