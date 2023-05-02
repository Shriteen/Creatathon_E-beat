// 4.23. List of dancing schools
import mongoose from "mongoose";
const {Schema} = mongoose

const dancingSchoolsSchema = new Schema({
    name: {type: String, required: true },
    location:{type: String, required: true},
    ownerName:{type: String, required: true},
    ownerPhoneNumber: {type: String, required: true},
    ownerAddress: {type: String, required: true},
    areaUnder:{
        type: Schema.Types.ObjectId,
        ref: 'Beat',
    }
})

const dancingSchools = mongoose.model('DancingSchools', dancingSchoolsSchema)
module.exports = dancingSchools