// 4.51. List of FIR's registered
import mongoose from "mongoose";
const {Schema} = mongoose

const FIRSchema = new Schema({
    crimeNumber: {type: Number, required: true },           // Is this required actually?
    accusedName: {type: String, required: true},
    place:{type: String, required: true},
    disposal:{type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const FIR = mongoose.model('FIR', FIRSchema)
module.exports = FIR