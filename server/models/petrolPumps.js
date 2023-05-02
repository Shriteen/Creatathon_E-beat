// 4.6 List of Petrol Pumps

import mongoose from "mongoose";
const {Schema} = mongoose

const petrolPumpsSchema = new Schema({
    name: {type: String, required: true },
    location: {type: String, required: true },
    managerName: {type: String, required: true},
    managerPhoneNumber: {type: String, required: true},
    managerAddress: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    },
})

const petrolPumps = mongoose.model('PetrolPumps', petrolPumpsSchema)
module.exports = petrolPumps