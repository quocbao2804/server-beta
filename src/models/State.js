const mongoose = require('mongoose');
const StateSchema = new mongoose.Schema({
    userId: String,
    language: String,
    isNextNodeHaveCondition: Boolean,
    next: String,
    isAdmin : Boolean
});

const State= mongoose.model('state',StateSchema);
module.exports = State;