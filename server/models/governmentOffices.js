// 4.1. Particulars of Government Offices and Location
import mongoose from "mongoose";
const {Schema} = mongoose

const governmentOfficesSchema = new Schema({
    name: {type: String, required: true },
    phoneNumber: {type: String, required: true},
    officerInCharge:{type: String, required: true},
    location:{type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const governmentOffices = mongoose.model('GovernmentOffices', governmentOfficesSchema)
module.exports = governmentOffices