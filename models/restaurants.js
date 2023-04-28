// 4.21. List of important restaurants
import mongoose from "mongoose";
const {Schema} = mongoose

// ! INCOMPLETE

const restaurantsSchema = new Schema({
    name: {type: String, required: true },
    ownerName: {type: String, required: true},
    ownerPhoneNumber: {type: String, required: true},
    ownerAddress: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    },
    staffListDetails:{

    }
})

const restaurants = mongoose.model('Restaurants', restaurantsSchema)
module.exports = restaurants
