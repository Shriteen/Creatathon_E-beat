// 4.26. List of tourist guides
import mongoose from "mongoose";
const {Schema} = mongoose

const touristGuidesSchema = new Schema({
    name: {type: String, required: true },
    localAddress: {type: String, required: true},
    nativeAddress: {type: String, required: true},
    phone: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const touristGuides = mongoose.model('TouristGuides', touristGuidesSchema)
module.exports = touristGuides