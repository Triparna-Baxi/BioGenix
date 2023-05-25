//token for login signup
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    token: { type: String },
    createdAt: { type: Date, default: Date.now, expires: 3600 },
});
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
