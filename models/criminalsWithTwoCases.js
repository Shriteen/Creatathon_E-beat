// 4.47. List of criminals having two or more involvement of crimes
import mongoose from "mongoose";
const {Schema} = mongoose

const criminalsWithTwoCasesSchema = new Schema({
    name: {type: String, required: true },
    address: {type: String, required: true},
    firdetails:{
        type: Schema.Types.ObjectId,
        ref: 'FIR',
    }
})

const criminalsWithTwoCases = mongoose.model('CriminalsWithTwoCases', criminalsWithTwoCasesSchema)
module.exports = criminalsWithTwoCases