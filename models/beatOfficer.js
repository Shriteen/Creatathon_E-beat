// 1. Name and Phone No.of Beat Officer
import mongoose from "mongoose";
const {Schema} = mongoose

const beatOfficerSchema = new Schema({
    name: {type: String, required: true },
    phoneNumber: {type: String, required: true},
    designation:{type: String, required: true},
    beatarea:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const beatOfficer = mongoose.model('BeatOfficer', beatOfficerSchema)
module.exports = beatOfficer