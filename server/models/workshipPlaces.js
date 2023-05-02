// 4.4 Particulars of places of workship
import mongoose from "mongoose";
const {Schema} = mongoose

const workshipPlacesSchema = new Schema({
    name: {type: String, required: true },
    location:{type: String, required: true},
    memberName:{type: String, required: true},
    memberPhoneNumber: {type: String, required: true},
    memberAddress: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const workshipPlaces = mongoose.model('WorkshipPlaces', workshipPlacesSchema)
module.exports = workshipPlaces