// 4.33. List of Bad Characters and History Sheeters
import mongoose from "mongoose";
const {Schema} = mongoose

// ! INCOMPLETE

const historySheetersSchema = new Schema({
    name: {type: String, required: true },
    address: {type: String, required: true},
    phone: {type: String, required: true},

})

const historySheeters = mongoose.model('HistorySheeters', historySheetersSchema)
module.exports = historySheeters