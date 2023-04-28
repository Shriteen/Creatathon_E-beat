// 4.5 Particular of Guest Houses/Hotels and Restaurants
import mongoose from "mongoose";
const {Schema} = mongoose

const hotelSchema = new Schema({
    name: {type: String, required: true },
    location:{type: String, required: true},
    boardingFacilityExits:{type:Boolean, required: true},
    managerName:{type: String, required: true},
    managerPhoneNumber: {type: String, required: true},
    managerAddress: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const hotels = mongoose.model('Hotels', hotelSchema)
module.exports = hotels