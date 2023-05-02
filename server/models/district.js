import mongoose from "mongoose";
const {Schema} = mongoose

const districtSchema = new Schema({
    name: {type: String, required: true}
})

const district = mongoose.model('District', districtSchema)
module.exports = district
